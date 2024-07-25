'use client'
import  { useState } from "react";
import Sidebar from "./_components/sidebar";
import AiUsage from "./_components/ai-usage";
import HamburgerButton from "./_components/hamburger";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="bg-gray-50 dark:bg-black h-screen ">
        <div>
          <HamburgerButton onClick={toggleSidebar} />
        </div>
      <div className="md:w-64  ">
        <Sidebar isVisible={isSidebarVisible}/>
        
      </div>
      <div className="md:ml-64 bg-gray-50 dark:bg-black h-fit pb-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
