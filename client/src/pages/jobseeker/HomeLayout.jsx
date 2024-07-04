import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { setUserInfo } from "../../slices/allUsersSlice";
import JobSeekerSmallBar from "../../components/jobseeker/JobSeekerSmallBar";
import { useGetJobSeekerDetailsQuery } from "../../slices/jobSeekerApiSlice";
import {
  setAbout,
  setAddress,
  setAge,
  setCertificates,
  setCurrentSalary,
  setDateOfBirth,
  setEducation,
  setEmail,
  setExpectedSalary,
  setFullName,
  setGithub,
  setLanguages,
  setPortfolio,
  setPrefferedLocation,
  setProfilePic,
  setProjects,
  setQualification,
  setResume,
  setskills,
  setTotalExperience,
  setWork,
} from "../../slices/dataCollectionSlice";

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
      dispatch(setEducation(data.education.length > 0 ? data.education : [{}]));
      dispatch(setWork(data.work.length > 0 ? data.work : [{}]));
      dispatch(setProjects(data.projects.length > 0 ? data.projects : [{}]));
      dispatch(
        setCertificates(data.certificates.length > 0 ? data.certificates : [{}])
      );
      dispatch(setFullName(data.fullName ? data.fullName : ""));
      dispatch(setAge(data.owner.age ? data.owner.age : ""));
      dispatch(setEmail(data.owner.email ? data.owner.email : ""));
      dispatch(setAddress(data.owner.address ? data.owner.address : ""));
      dispatch(
        setDateOfBirth(data.owner.dateOfBirth ? data.owner.dateOfBirth : "")
      );
      dispatch(setProfilePic(data.profilePic ? data.profilePic : ""));
      dispatch(setQualification(data.qualification ? data.qualification : ""));
      dispatch(setPortfolio(data.portfolio ? data.portfolio : ""));
      dispatch(setGithub(data.github ? data.github : ""));
      dispatch(setResume(data.resume ? data.resume : ""));
      dispatch(setCurrentSalary(data.currentSalary ? data.currentSalary : ""));
      dispatch(
        setExpectedSalary(data.expectedSalary ? data.expectedSalary : "")
      );
      dispatch(
        setTotalExperience(data.totalExperience ? data.totalExperience : "")
      );
      dispatch(
        setPrefferedLocation(
          data.preferredLocation ? data.preferredLocation : ""
        )
      );
      dispatch(setskills(data.skills ? data.skills : ""));
      dispatch(setLanguages(data.languages ? data.languages : ""));
      dispatch(setAbout(data.about ? data.about : ""));
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
