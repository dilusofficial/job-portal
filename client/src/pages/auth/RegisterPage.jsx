import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../slices/authApiSlice";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("Password does not match");
      return;
    } else {
      try {
        const res = await registerUser({
          username,
          password,
          email,
        }).unwrap();
        if (res.msg === "registered successfully") {
          navigate("/send-otp");
          toast.success("successfully registered");
        } else {
          toast.error(res.msg);
        }
      } catch (err) {
        toast.error(err?.data?.msg || err?.error);
      }
    }
  }
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
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="email"
            className="my-3 py-1 ps-1"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            className="my-3 py-1 ps-1"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <input
            type="password"
            className="my-3 py-1 ps-1"
            name="re-password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Re-Enter Password"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-2 bg-ascent text-center text-primary rounded-md hover:bg-hover"
          >
            Register
          </button>
          {isLoading && <Loading />}
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
