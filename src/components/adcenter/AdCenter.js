import React from "react";
import SubHeader from "./subheader";
import ChooseAGoal from "./ChooseAGoal";
import Navbar from "../Home/Navbar";
import "../../css/adcenter.css";
const AdCenter = () => {
  return (
    <div className="theme-layout">
      <Navbar />
      <SubHeader />
      <ChooseAGoal />
    </div>
  );
};

export default AdCenter;
