import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { homeLinks } from "../utils/links";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname.toString();
  return (
    <header className=" bg-secondary h-20 flex justify-between items-center p-5">
      <Link to={"/"} className="text-xl md:text-3xl font-semibold ms-4">
        Job Portal
      </Link>

      <div className="flex justify-center items-center gap-1 md:gap-3">
        <Link
          to={"/admin/statistics"}
          className="p-1 border border-ascent rounded-md hover:bg-hover"
        >
          Admin
        </Link>
        <div className="flex gap-1 md:gap-3">
          {homeLinks.map((item) => (
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
    </header>
  );
}
