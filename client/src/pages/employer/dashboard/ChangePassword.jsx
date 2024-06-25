import React from "react";
import ProfileFormInputElt from "../../../components/employer/dashboard/ProfileFormInputElt";

export default function ChangePassword() {
  return (
    <div>
      <h1 className="text-xl my-3">Change Password</h1>
      <div className="w-full lg:w-1/2">
        <ProfileFormInputElt title={"Old Password"} type={"text"} />
        <ProfileFormInputElt title={"New Password"} type={"text"} />
        <ProfileFormInputElt title={"Confirm Password"} type={"text"} />
        <button className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover">
          Update
        </button>
      </div>
    </div>
  );
}
