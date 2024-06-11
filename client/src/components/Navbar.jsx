import React from "react";
import { FaAlignLeft } from "react-icons/fa";

export default function Navbar({ toggle, show }) {
  return (
    <div className=" h-24 flex items-center justify-center shadow-md bg-secondary m-3 rounded-lg lg:sticky lg:top-0 z-30 md:z-0">
      <nav className="vw90 flex items-center justify-between lg:w-11/12">
        <button
          type="button"
          className="md:text-3xl text-xl text-ascent flex items-center"
          onClick={() => toggle(!show)}
        >
          <FaAlignLeft />
        </button>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-0 md:gap-3 my-0 mx-auto  lg:hidden">
            <h3 className="text-blue-700 text-base md:text-2xl font-bold">
              Job Portal Admin
            </h3>
          </div>
          <h4 className="hidden lg:block text-xl font-semibold">Dashboard</h4>
        </div>
        <div className=" flex items-center">
          <button className="bg-ascent text-primary p-2 rounded-md hover:bg-hover">
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
