import React from "react";
import Navbar from "../components/Home/Navbar";
import PageHeader from "../components/Privacy/PageHeader";
import PrivacyPoints from "../components/Privacy/PrivacyPoints";
import Footer from "../components/Home/Footer";
import "../css/privacy.css";
const PrivacyView = () => {
  return (
    <div className="theme-layout">
      <Navbar />
      <PageHeader />
      <PrivacyPoints />
      <Footer />
    </div>
  );
};

export default PrivacyView;
