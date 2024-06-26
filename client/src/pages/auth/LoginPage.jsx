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
  const [role, setRole] = useState("candidate");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await loginUser({
        password,
        email,
      }).unwrap();
      if (res.msg === "logged in successfully") {
        navigate("/admin/statistics");
        toast.success("successfully logged in");
      } else {
        toast.error(res.msg);
      }
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
      if (
        resp.msg === "successfully logged in" ||
        resp.msg === "registered successfully"
      ) {
        navigate("/admin/statistics");
        toast.success("successfully logged in");
      } else {
        toast.error(resp.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 lg:w-4/5 p-4 lg:border-0 border border-ascent rounded-md">
        <div className=" w-full text-center mb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold">Job Portal</h1>
        </div>

        <h2 className="text-xl lg:text-2xl my-3 font-medium">Login</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 w-full my-3">
          <button
            onClick={() => setRole("candidate")}
            className={` w-full px-2 py-3 rounded-lg ${
              role === "candidate"
                ? "bg-ascent text-secondary"
                : "bg-background1 hover:bg-hover hover:text-secondary"
            }`}
          >
            Candidate
          </button>
          <button
            onClick={() => setRole("employer")}
            className={`w-full px-2 py-3 rounded-lg ${
              role === "employer"
                ? "bg-ascent text-secondary"
                : "bg-background1 hover:bg-hover hover:text-secondary"
            }`}
          >
            Employer
          </button>
        </div>
        <form className="flex flex-col w-full">
          <div className="form-row">
            <label htmlFor="emailid" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="emailid"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="passwordid" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="passwordid"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-3 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Login
          </button>
          {isLoading && <Loading />}
        </form>

        <p className="my-3">
          Not have an account?{" "}
          <Link to="/auth/register" className="text-blue-700 underline">
            Register
          </Link>
        </p>
        <p className="my-3">
          <Link to="/auth/forgot-password" className="text-blue-700 underline">
            Forgot Password?
          </Link>
        </p>
        <p className="mb-3">or</p>
        <GoogleLogin
          theme="filled_blue"
          shape="pill"
          width={"100"}
          onSuccess={handleGoogleSuccess}
          onError={() => {
            toast.error("Login Failed");
          }}
        />
      </div>
    </div>
  );
}
