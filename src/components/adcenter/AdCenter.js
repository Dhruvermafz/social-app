import React from "react";
import SubHeader from "./subheader";
import ChooseAGoal from "./ChooseAGoal";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const AdCenter = () => {
  return (
    <div className="theme-layout">
      <Navbar />
      <SubHeader />
      <ChooseAGoal />
      <Footer />
    </div>
  );
};

export default AdCenter;
