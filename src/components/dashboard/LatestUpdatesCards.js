// LatestUpdatesCard.js
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function LatestUpdatesCard() {
  return (
    <div className="bg-pink-100 p-6 rounded-lg text-center">
      <div className="bg-blue-200 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
        <span role="img" aria-label="Coffee" className="text-4xl">
          ☕
        </span>
      </div>
      <h3 className="font-bold mt-4">Latest Updates</h3>
      <p className="text-gray-500">F&B Industry</p>
      <button className="bg-blue-500 text-white rounded-full p-2 mt-4">
        <FaPlus />
      </button>
    </div>
  );
}
