import { IoStatsChart } from "react-icons/io5";
import { PiBuildingOffice } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { TbReport } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

export const homeLinks1 = [
  { path: "/jobs", text: "Find Jobs" },
  { path: "/companies", text: "Companies" },
];

export const employerHomeList = [
  {
    path: "/candidates",
    text: "Candidates",
  },
  {
    path: "/companies",
    text: "Companies",
  },
];

export const adminLinks = [
  {
    path: "/admin/statistics",
    text: "Statistics",
    url: "statistics",
    icon: <IoStatsChart />,
  },
  {
    path: "/admin/companies",
    text: "Companies",
    url: "companies",
    icon: <PiBuildingOffice />,
  },
  {
    path: "/admin/jobs",
    text: "Jobs",
    url: "jobs",
    icon: <MdWork />,
  },
  {
    path: "/admin/users",
    text: "Users",
    url: "users",
    icon: <HiUsers />,
  },
  {
    path: "/admin/reports",
    text: "Reports",
    url: "reports",
    icon: <TbReport />,
  },
  {
    path: "/admin/settings",
    text: "Settings",
    url: "settings",
    icon: <IoSettingsSharp />,
  },
];
