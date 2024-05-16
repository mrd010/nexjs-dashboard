import React from 'react';
import { Card } from '../ui/dashboard/cards';
import { lusitana } from '../ui/fonts';
import RevenueChart from '../ui/dashboard/revenue-chart';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import { fetchLatestInvoices, fetchRevenue } from '../lib/data';

const page = async () => {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={} type="collected"></Card>
        <Card title="Pending" value={} type="pending"></Card>
        <Card title="Total Invoices" value={} type="invoices"></Card>
        <Card title="Total Customers" value={} type="customers"></Card> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 ">
        <RevenueChart revenue={revenue}></RevenueChart>
        <LatestInvoices latestInvoices={latestInvoices}></LatestInvoices>
      </div>
    </main>
  );
};

export default page;
