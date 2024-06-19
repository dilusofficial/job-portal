import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useGoogleLoginUserMutation,
  useLoginUserMutation,
} from "../../slices/authApiSlice";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [googleLoginUser] = useGoogleLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await loginUser({
        password,
        email,
      }).unwrap();
      navigate("/admin/statistics");
      toast.success("successfully logged in");
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  async function handleGoogleSuccess(creds) {
    const decoded = jwtDecode(creds.credential);
    try {
      const resp = await googleLoginUser({
        email: decoded.email,
        username: decoded.name,
      }).unwrap();
      navigate("/admin/statistics");
      toast.success("successfully logged in");
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 md:w-2/3 lg:w-1/4 border p-2 rounded-md bg-secondary">
        <div className="border-b-2 border-b-ascent w-full text-center">
          <h1 className="text-2xl font-semibold">Job Portal</h1>
        </div>

        <h2 className="text-xl mt-3 font-medium">Login</h2>
        <form className="flex flex-col w-full">
          <input
            type="email"
            className="my-3 py-1 ps-1"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="my-3 py-1 ps-1"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-2 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Login
          </button>
          {isLoading && <Loading />}
        </form>
        <GoogleLogin
          size="large"
          onSuccess={handleGoogleSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <p className="my-3">
          Not have an account?{" "}
          <Link to="/register" className="text-blue-700 underline">
            Register
          </Link>
        </p>
        <p className="my-3">
          <Link to="/forgot-password" className="text-blue-700 underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}
