import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 md:w-2/3 lg:w-1/4 border p-2 rounded-md bg-secondary">
        <div className="border-b-2 border-b-ascent w-full text-center">
          <h1 className="text-2xl font-semibold">Job Portal</h1>
        </div>

        <h2 className="text-xl mt-3 font-medium">Register</h2>
        <form className="flex flex-col w-full">
          <input
            type="text"
            className="my-3 py-1 ps-1"
            name="username"
            placeholder="Full Name"
          />
          <input
            type="number"
            className="my-3 py-1 ps-1"
            name="mobile"
            placeholder="Mobile"
          />
          <input
            type="email"
            className="my-3 py-1 ps-1"
            name="email"
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="my-3 py-1 ps-1"
            name="password"
            placeholder="Enter Password"
          />
          <input
            type="password"
            className="my-3 py-1 ps-1"
            name="re-password"
            placeholder="Re-Enter Password"
          />
          <button className="my-3 py-2 bg-ascent text-primary rounded-md hover:bg-hover">
            Register
          </button>
        </form>
        <p className="my-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
