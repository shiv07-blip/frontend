import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/header/HeroSection";
import Main from "../../components/mainsection/main";
import Desp from "../../components/header/desp";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Main />
        <Desp />
      </Layout>
    </>
  );
};

export default Home;
