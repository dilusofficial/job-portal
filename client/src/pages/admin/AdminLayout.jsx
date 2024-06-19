import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BigSideBar from "../../components/admin/BigSideBar";
import SmallSideBar from "../../components/admin/SmallSideBar";

export default function AdminLayout() {
  const [showSidebar, setShowSidebar] = useState(true);

  /*const getInfo = async () => {
    const res = await fetch("http://localhost:3000/home/user");
    console.log(res);
  };
  useEffect(() => {
    getInfo();
  }, []);**/

  return (
    <div className="flex">
      <div className={`${showSidebar ? "block" : "hidden"}`}>
        <BigSideBar />
      </div>
      <SmallSideBar setShowSideBar={setShowSidebar} showSidebar={showSidebar} />
      <div className=" flex-grow">
        <Navbar toggle={setShowSidebar} show={showSidebar} />
        <div className="p-2 m-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
