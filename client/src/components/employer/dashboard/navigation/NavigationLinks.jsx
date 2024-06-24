import React from "react";
import { employerDashboardLinks } from "../../../../utils/links";
import { NavLink, useLocation } from "react-router-dom";

export default function NavigationLinks() {
  const location = useLocation();
  const pathname = location.pathname.toString();
  return (
    <div className="pt-8 flex flex-col">
      {employerDashboardLinks.map((item) => (
        <NavLink
          className={`nav-link flex items-center gap-2 py-4 lg:ps-8 px-0 capitalize hover:text-blue-700 hover:ms-5 ${
            pathname.includes(item.path) ? "text-blue-700" : ""
          }`}
          key={item.text}
          to={item.path}
        >
          <span className="lg:text-2xl lg:me-4">{item.icon}</span>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}
