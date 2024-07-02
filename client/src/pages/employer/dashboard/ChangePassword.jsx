import React from "react";
import FormInput from "../../../components/FormInput";

export default function ChangePassword() {
  return (
    <div>
      <h1 className="text-xl my-3">Change Password</h1>
      <div className="w-full lg:w-1/2">
        <FormInput title={"Old Password"} type={"text"} />
        <FormInput title={"New Password"} type={"text"} />
        <FormInput title={"Confirm Password"} type={"text"} />
        <button className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover">
          Update
        </button>
      </div>
    </div>
  );
}
