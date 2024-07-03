import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { setUserInfo } from "../../slices/allUsersSlice";
import JobSeekerSmallBar from "../../components/jobseeker/JobSeekerSmallBar";

export default function HomeLayout() {
  const dispatch = useDispatch();

  const getInfo = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/userInfo`, {
        withCredentials: true,
      });
      dispatch(setUserInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <Header />
      <JobSeekerSmallBar />
      <div className="p-6 lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
