import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleEmployerSmallBar } from "../../slices/responsiveSlice";

export default function EmployerSmallBar() {
  const { showEmployerSmallBar } = useSelector((state) => state.responsive);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-80 h-full bg-primary fixed left-0 z-10 p-5 ${
        showEmployerSmallBar ? "ml-0" : "-ml-80"
      } nav-link`}
    >
      <div className="flex justify-end">
        <button
          className="text-3xl"
          onClick={() => dispatch(toggleEmployerSmallBar())}
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>

      <h1 className="text-xl md:text-3xl font-semibold my-7 border-b-2 py-2">
        Job Portal
      </h1>

      <div className="flex flex-col items-start gap-10 text-md font-semibold border-b-2 pb-7 mb-3">
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/employer"}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/employer/candidates"}
        >
          Candidates
        </NavLink>
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/employer/companies"}
        >
          Companies
        </NavLink>
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/employer/dashboard"}
        >
          Dashboard
        </NavLink>
      </div>
      <div className="w-1/2">
        <Link
          onClick={() => dispatch(toggleEmployerSmallBar())}
          to={"/auth/login"}
          className="p-1 px-2 text-xl bg-ascent text-primary rounded-md hover:bg-hover"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
