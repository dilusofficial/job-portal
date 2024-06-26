import React from "react";
import { Outlet } from "react-router-dom";
import EmployerHeader from "../../components/employer/EmployerHeader";
import Footer from "../../components/Footer";
import EmployerSmallBar from "../../components/employer/EmployerSmallBar";

export default function EmployerHomeLayout() {
  return (
    <>
      <EmployerHeader />
      <EmployerSmallBar />
      <div className="p-6 lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
