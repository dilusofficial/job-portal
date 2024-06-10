import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BigSideBar from "../../components/BigSideBar";

export default function AdminLayout() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="flex">
      <BigSideBar show={showSidebar} />
      <div className=" flex-grow">
        <Navbar toggle={setShowSidebar} show={showSidebar} />
        <div className="p-2 m-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
