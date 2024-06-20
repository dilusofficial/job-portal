import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../slices/authApiSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

export default function ForgotPasswordPage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword({ phone }).unwrap();
      if (res.msg === "KEY has been sent") {
        navigate("/reset-password");
        toast.success("Key has been send to mobile");
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

        <h2 className="text-xl mt-3 font-medium">Password reset</h2>
        <form className="flex flex-col w-full">
          <h2 className="text-lg mt-3 font-medium">Enter registered phone</h2>
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
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-2 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Submit
          </button>
          {isLoading && <Loading />}
        </form>
        <p className="my-3">
          <Link to="/login" className="text-blue-700 underline">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
}
