import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
  title: 'Edit',
};

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(id),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      ></Breadcrumbs>
      <Form invoice={invoice} customers={customers} />
    </main>
  );
};

export default Page;
