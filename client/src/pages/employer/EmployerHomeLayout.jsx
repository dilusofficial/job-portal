import React from "react";
import { Outlet } from "react-router-dom";
import EmployerHeader from "../../components/employer/EmployerHeader";
import Footer from "../../components/Footer";

export default function EmployerHomeLayout() {
  return (
    <>
      <EmployerHeader />
      <div className="p-6 lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
