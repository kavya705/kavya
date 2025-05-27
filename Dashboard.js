import React from "react";
import ScheduleCard from "./ScheduleCard";

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full border border-gray-300"
        />
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-6 w-2/3">
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <img src="/assets/body.png" alt="body" className="h-64" />
            <div className="ml-6 space-y-4">
              <div className="text-md font-medium">Lungs</div>
              <div className="h-2 w-48 bg-gray-200 rounded-full">
                <div className="bg-red-400 h-2 rounded-full w-[75%]"></div>
              </div>
              <div className="text-md font-medium">Teeth</div>
              <div className="h-2 w-48 bg-gray-200 rounded-full">
                <div className="bg-green-400 h-2 rounded-full w-[90%]"></div>
              </div>
              <div className="text-md font-medium">Bone</div>
              <div className="h-2 w-48 bg-gray-200 rounded-full">
                <div className="bg-orange-400 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Activity</h3>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d}>
                  <div className="h-20 bg-accent rounded-md"></div>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/3 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">October 2021</h3>
            <div className="grid grid-cols-7 text-xs text-center mt-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className="font-bold">{d}</div>
              ))}
              {[...Array(31)].map((_, i) => (
                <div key={i} className={`p-1 ${i + 1 === 26 ? "bg-accent text-white rounded" : ""}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <ScheduleCard title="Health checkup complete" time="11:00 AM" emoji="🩺" />
            <ScheduleCard title="Ophthalmologist" time="14:00 PM" emoji="👁️" />
            <ScheduleCard title="Cardiologist" time="12:00 AM" emoji="❤️" />
            <ScheduleCard title="Neurologist" time="16:00 PM" emoji="🧠" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;