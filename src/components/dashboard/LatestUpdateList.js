// LatestUpdatesList.js
import React from "react";
import { FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";

export default function LatestUpdatesList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Latest updates</h2>
      <UpdateItem
        Icon={FaTwitter}
        label="Twitter"
        value="+987.00"
        color="text-green-500"
      />
      <UpdateItem
        Icon={FaPinterest}
        label="Pinterest"
        value="+35.00"
        color="text-red-500"
      />
      <UpdateItem
        Icon={FaLinkedin}
        label="LinkedIn"
        value="+126.00"
        color="text-blue-500"
      />
    </div>
  );
}

function UpdateItem({ Icon, label, value, color }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Icon className="text-2xl" />
        <div>
          <p className="font-semibold">{label}</p>
          <p className="text-gray-500 text-sm">F&B Industry</p>
        </div>
      </div>
      <p className={`${color} font-bold`}>{value}</p>
    </div>
  );
}
