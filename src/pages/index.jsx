import React, { useEffect } from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes";
import Wrapper from "../layout/wrapper";

const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);
  
  return (
    <Wrapper>
      <SEO pageTitle={"SAT20Market-- Satoshi Asset Marketplace in the Bitcoin Ecosystem"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
