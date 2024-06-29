import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import EmployerHeader from "../../components/employer/EmployerHeader";
import Footer from "../../components/Footer";
import EmployerSmallBar from "../../components/employer/EmployerSmallBar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { setUserInfo } from "../../slices/allUsersSlice";

export default function EmployerHomeLayout() {
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
    <div>
      <EmployerHeader />
      <EmployerSmallBar />
      <div className="p-6 lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
