import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/header/HeroSection";

import Desp from "../../components/header/desp";
import Main from "../../components/mainsection/Main";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Main/>
        <Desp />
      </Layout>
    </>
  );
};

export default Home;
