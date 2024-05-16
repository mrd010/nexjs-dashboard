import React, { Suspense } from 'react';
import { Card } from '../../ui/dashboard/cards';
import { lusitana } from '../../ui/fonts';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { fetchCardData, fetchLatestInvoices } from '../../lib/data';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';

const page = async () => {
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Collected"
          value={totalPaidInvoices}
          type="collected"
        ></Card>
        <Card
          title="Pending"
          value={totalPendingInvoices}
          type="pending"
        ></Card>
        <Card
          title="Total Invoices"
          value={numberOfInvoices}
          type="invoices"
        ></Card>
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        ></Card>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 ">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart></RevenueChart>
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices}></LatestInvoices>
      </div>
    </main>
  );
};

export default page;
