"use client";
import Auth from "@/components/auth";
import { ModeToggle } from "@/components/darkMode";
import NavLogo from "@/components/nav-logo";
import { cn } from "@/lib/utils";
import { CreditCard, History, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AiUsage from "./ai-usage";

const menuList = [
  {
    name: "Magic Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "Output History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];
const Sidebar = ({ isVisible }: { isVisible: boolean }) => {
  const path = usePathname();
  return (
    <div className={`fixed h-screen top-0 left-0  bg-white dark:bg-[#222831]  p-5 shadow-lg transition-transform transform ${
      isVisible ? "translate-x-0" : "-translate-x-64"
    } md:translate-x-0 md:w-64 z-10`}>
      <NavLogo />
      <div className="mt-10 h-max flex flex-col justify-between ">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
              "flex gap-2 mb-2 p-3 hover:bg-primary dark:hover:text-black hover:text-white cursor-pointer rounded-lg items-center ",
              path === menu.path && "bg-primary text-white dark:text-black"
            )}
          >
            <menu.icon className="h-6 w-6"></menu.icon>
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
      
        <div className="flex items-center gap-5 p-3">
          <Auth />
          <ModeToggle/>
        </div>
      


    </div>
  );
};

export default Sidebar;
