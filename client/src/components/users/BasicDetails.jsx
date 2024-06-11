import React from "react";
import { RxAvatar } from "react-icons/rx";

export default function BasicDetails({ user }) {
  return (
    <section className="bg-secondary p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="form-title mb-3 text-lg font-semibold">
            {"Basic Details"}
          </h4>
          <div className="flex gap-3 justify-start items-center my-3">
            <p>Email</p>
            <p>:</p>
            <p>{user?.email || "example@gmail.com"}</p>
          </div>
          <div className="flex gap-3 justify-start items-center my-3">
            <p>Phone</p>
            <p>:</p>
            <p>{user?.phone || "9999999999"}</p>
          </div>
          <div className="flex gap-3 justify-start items-center my-3">
            <p>Address</p>
            <p>:</p>
            <p>{user?.address || "India"}</p>
          </div>
          <div className="flex gap-3 justify-start items-center my-3">
            <p>Age</p>
            <p>:</p>
            <p>{user?.age || "23"}</p>
          </div>
          <div className="flex gap-3 justify-start items-center my-3">
            <p>D.O.B</p>
            <p>:</p>
            <p>{user?.dateOfBirth || "23/10/1997"}</p>
          </div>
        </div>
        <div className="text-8xl p-2 border border-primary">
          <RxAvatar />
        </div>
      </div>
    </section>
  );
}
