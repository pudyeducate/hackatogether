// Header.js
import React from "react";
import { FaBell, FaCog } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-md">
      <div>
        <h2 className="text-2xl font-bold">Your Dashboard is updated</h2>
        <p className="text-gray-600">Hello Dave, Welcome back</p>
      </div>
      <div className="flex space-x-4 items-center">
        <FaBell className="text-xl text-gray-500" />
        <FaCog className="text-xl text-gray-500" />
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
