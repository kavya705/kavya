import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#EEF4FF] text-[#1C1C1E]">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;