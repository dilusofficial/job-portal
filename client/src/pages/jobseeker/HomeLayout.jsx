import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { setJSInfo, setType, setUserInfo } from "../../slices/allUsersSlice";
import JobSeekerSmallBar from "../../components/jobseeker/JobSeekerSmallBar";
import { useGetJobSeekerDetailsQuery } from "../../slices/jobSeekerApiSlice";
import { setData } from "../../slices/dataCollectionSlice";
import { useGetUserInfoQuery } from "../../slices/authApiSlice";

export default function HomeLayout() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetJobSeekerDetailsQuery();
  const { data: data2, isLoading: loading2 } = useGetUserInfoQuery();

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
      dispatch(setJSInfo(data));
      dispatch(setType("jobseeker"));
    }
  }, [isLoading]);

  useEffect(() => {
    if (data2) {
      dispatch(setUserInfo(data2));
    }
  }, [loading2]);
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
