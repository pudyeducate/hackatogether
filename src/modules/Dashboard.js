// Dashboard.js
import React from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import LatestUpdatesCard from "../components/dashboard/LatestUpdatesCards";
import LatestUpdatesList from "../components/dashboard/LatestUpdateList";
import Stats from "../components/dashboard/Stats";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-100">
        <Header />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <LatestUpdatesCard />
          <LatestUpdatesList />
          <Stats />
        </div>
      </main>
    </div>
  );
}
