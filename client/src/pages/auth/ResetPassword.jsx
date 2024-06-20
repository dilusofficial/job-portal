import React, { useState } from "react";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../slices/authApiSlice";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword({ id, password }).unwrap();
      if (res.msg === "password reset") {
        navigate("/login");
        toast.success("password has been changed");
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
          <h2 className="text-lg mt-3 font-medium">Enter key</h2>
          <input
            type="text"
            className="my-3 py-1 ps-1"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter key"
            required
          />
          <h2 className="text-lg mt-3 font-medium">Enter new Password</h2>
          <input
            type="password"
            className="my-3 py-1 ps-1"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*****"
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
          Didnt get Key?
          <Link to="/forgot-password" className="text-blue-700 underline">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
}
