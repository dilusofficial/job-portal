import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <div className="p-6 lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
