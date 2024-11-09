// Stats.js
import React from "react";

export default function Stats() {
  return (
    <div className="flex space-x-6 mt-6">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill="none"
            stroke="#eee"
            strokeWidth="8"
          />
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill="none"
            stroke="#ff8500"
            strokeWidth="8"
            strokeDasharray="314"
            strokeDashoffset="34" // Adjust for percentage
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-800">
          89%
        </div>
        <p className="text-center text-gray-600 mt-2">Posts Went Viral</p>
      </div>

      <div className="bg-purple-200 p-6 rounded-lg flex flex-col justify-center items-center text-center">
        <p className="text-sm text-gray-600">Great Job, You Saved</p>
        <p className="text-4xl font-bold">270K</p>
        <p className="text-sm text-gray-600">Post Reach This Year</p>
        <p className="text-xs text-gray-500 mt-1">2020</p>
      </div>
    </div>
  );
}
