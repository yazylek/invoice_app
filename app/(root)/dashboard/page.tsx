"use client";

import { BarChartDashboard } from "@/components/dashboard/BarChart";
import { PieChartDashboard } from "@/components/dashboard/PieChart";
import QuickStats from "@/components/dashboard/QuickStats";
import { TableDashboard } from "@/components/dashboard/Table";
import { useAuth } from "@/lib/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { token } = useAuth();
  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
  }, [token, router]);

  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:grid lg:grid-cols-2  ">
      <div className="lg:col-start-1 lg:col-end-3">
        <h1 className="text-3xl lg:text-2xl font-bold mt-6 lg:mb-4">
          Dashboard
        </h1>
        <QuickStats />
      </div>
      <div>
        <PieChartDashboard />
      </div>
      <div>
        <BarChartDashboard />
      </div>

      <div className="lg:col-start-1 lg:col-end-3">
        <h2 className="text-xl font-bold mt-6 mb-4">Recent Transactions</h2>

        <TableDashboard />
      </div>
    </section>
  );
}
