import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSendOTPtoUserMutation } from "../../slices/authApiSlice";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

export default function MobileOtp() {
  const [phone, setPhone] = useState("");
  const [sendOTPtoUser, { isLoading }] = useSendOTPtoUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendOTPtoUser({ phone }).unwrap();
      if (res.msg === "success") {
        navigate("/verify");
        toast.success("OTP has been send to mobile");
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

        <h2 className="text-xl mt-3 font-medium">Verify Your Mobile</h2>
        <form className="flex flex-col w-full">
          <input
            type="text"
            className="my-3 py-1 ps-1"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone with code eg:+91"
            required
          />

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-2 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Send OTP
          </button>
          {isLoading && <Loading />}
        </form>

        <p className="my-3 flex justify-start">
          Do this later
          <Link to="/admin/statistics" className="ms-2 text-blue-700 underline">
            skip
          </Link>
        </p>
      </div>
    </div>
  );
}
