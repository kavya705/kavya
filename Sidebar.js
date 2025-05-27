import React from "react";
import { Home, Calendar, Activity, BarChart, MessageCircle, Settings } from "lucide-react";

const menu = [
  { label: "Dashboard", icon: <Home /> },
  { label: "History", icon: <Activity /> },
  { label: "Calendar", icon: <Calendar /> },
  { label: "Appointments", icon: <BarChart /> },
  { label: "Statistics", icon: <BarChart /> },
  { label: "Chat", icon: <MessageCircle /> },
  { label: "Support", icon: <MessageCircle /> },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-md">
      <h1 className="text-2xl font-bold mb-10">
        <span className="text-teal-500">Health</span>care.
      </h1>
      <ul className="space-y-6">
        {menu.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-md cursor-pointer hover:text-accent">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-4 left-6">
        <Settings className="inline-block mr-2" />
        Setting
      </div>
    </div>
  );
};

export default Sidebar;