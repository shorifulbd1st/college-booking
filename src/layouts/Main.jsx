import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
