// Sidebar.js
import React from "react";
import {
  FaHome,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-blue-800 h-screen p-6 flex flex-col justify-between text-white w-60">
      <div>
        <h1 className="text-2xl font-bold mb-8">socializer™</h1>
        <nav className="space-y-4">
          <SidebarItem Icon={FaHome} label="Home" />
          <SidebarItem Icon={FaChartBar} label="Leaderboard" />
          <SidebarItem Icon={FaFileAlt} label="Spreadsheets" />
          <SidebarItem Icon={FaCog} label="Administration" />
          <SidebarItem Icon={FaChartBar} label="Sales" />
          <SidebarItem Icon={FaCog} label="Schedule" />
        </nav>
        <div className="mt-8 space-y-4">
          <SidebarItem Icon={FaEnvelope} label="Message" badge="9" />
          <SidebarItem Icon={FaPhone} label="Support" />
        </div>
      </div>
      <div className="bg-blue-700 p-4 rounded-lg text-center">
        <p className="text-sm">Upgrade to Pro for more resources</p>
        <button className="bg-white text-blue-800 rounded-full px-4 py-2 mt-4">
          Upgrade
        </button>
      </div>
    </div>
  );
}

function SidebarItem({ Icon, label, badge }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Icon className="text-lg" />
        <span>{label}</span>
      </div>
      {badge && (
        <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}
