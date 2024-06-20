import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyOTPtoUserMutation } from "../../slices/authApiSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

export default function MobileVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [verifyOTPtoUser, { isLoading }] = useVerifyOTPtoUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyOTPtoUser({ otp }).unwrap();
      if (res.msg === "verified") {
        navigate("/admin/statistics");
        toast.success("Phone number verified");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 md:w-2/3 lg:w-1/4 border p-2 rounded-md bg-secondary">
        <div className="border-b-2 border-b-ascent w-full text-center">
          <h1 className="text-2xl font-semibold">Job Portal</h1>
        </div>

        <h2 className="text-xl mt-3 font-medium">Enter OTP</h2>
        <form className="flex flex-col w-full">
          <input
            type="text"
            className="my-3 py-1 ps-1"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-2 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Verify
          </button>
          {isLoading && <Loading />}
        </form>

        <p className="my-3">
          Dont get OTP
          <Link to="/send-otp" className="text-blue-700 underline">
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
}
