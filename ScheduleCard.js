import React from "react";

const ScheduleCard = ({ title, time, emoji }) => (
  <div className="bg-[#F1F5FF] p-4 rounded-lg shadow text-sm">
    <div className="flex justify-between items-center">
      <span className="font-medium">{title}</span>
      <span>{emoji}</span>
    </div>
    <div className="text-xs text-gray-500 mt-1">{time}</div>
  </div>
);

export default ScheduleCard;