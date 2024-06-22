import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { employerHomeList } from "../../utils/links";
import { IoNotificationsOutline } from "react-icons/io5";

export default function EmployerHeader() {
  const location = useLocation();
  const pathname = location.pathname.toString();
  return (
    <header className="lg:px-16 bg-primary h-20 flex justify-between items-center sticky top-0 p-5 border-b border-primary shadow-sm">
      <div className="flex gap-1 md:gap-3">
        <Link to={"/employer"} className="text-xl md:text-3xl font-semibold">
          Job Portal
        </Link>
        <div className="lg:ms-5 flex gap-1 md:gap-3">
          {employerHomeList.map((item) => (
            <NavLink
              to={item.path}
              key={item.text}
              className={`text-base md:text-lg mx-1 md:mx-2 p-1 rounded-md hover:bg-hover hover:text-primary ${
                pathname.includes(item.path) && "bg-ascent text-primary"
              }`}
              end
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-1 md:gap-5">
        <div className="text-2xl">
          <IoNotificationsOutline />
        </div>
        <Link
          to={"/auth/login"}
          className="p-1 px-2 text-xl bg-ascent text-primary rounded-md hover:bg-hover"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
