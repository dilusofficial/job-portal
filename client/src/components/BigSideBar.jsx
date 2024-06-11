import React from "react";
import NavLinks from "./NavLinks";

export default function BigSideBar({ show }) {
  return (
    <div
      className={`${
        show ? `block` : "hidden animation"
      } p-6 bg-secondary min-h-screen w-60 m-3 rounded-lg `}
    >
      <div className="sticky top-0">
        <h1 className="text-2xl font-semibold mb-5 ps-8">Job Portal Admin</h1>
        <NavLinks />
      </div>
    </div>
  );
}
