import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { setJSInfo, setUserInfo } from "../../slices/allUsersSlice";
import JobSeekerSmallBar from "../../components/jobseeker/JobSeekerSmallBar";
import { useGetJobSeekerDetailsQuery } from "../../slices/jobSeekerApiSlice";
import { setData } from "../../slices/dataCollectionSlice";

export default function HomeLayout() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetJobSeekerDetailsQuery();

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

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
      dispatch(setJSInfo(data));
    }
  }, [isLoading]);
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
