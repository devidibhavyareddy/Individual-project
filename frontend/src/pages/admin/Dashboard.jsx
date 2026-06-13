import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import DashboardCard from "../../components/DashboardCard";

import {
  getDashboardStats,
} from "../../services/dashboardService";

const Dashboard = () => {

  const [stats, setStats] =
    useState({
      totalAnimals: 0,
      adoptedAnimals: 0,
      pendingRequests: 0,
    });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats =
    async () => {
      try {
        const data =
          await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-5">

        <DashboardCard
          title="Total Animals"
          value={stats.totalAnimals}
        />

        <DashboardCard
          title="Adopted"
          value={stats.adoptedAnimals}
        />

        <DashboardCard
          title="Pending Requests"
          value={stats.pendingRequests}
        />

      </div>

    </AdminLayout>
  );
};

export default Dashboard;