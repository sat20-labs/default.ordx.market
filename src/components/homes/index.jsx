import FooterTwo from "@/src/layout/footers/footer";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import FaqArea from "./faq-area";
import CommunitiesArea from "./communities-area";
import PartnerArea from "./partner-area";
import HomeAnimation from "./transcend-area";
import Sat20Wallet from "./wallet-area";
import HeroSection from "./hero-section";
import  HeroHomeLaunch  from "./hero-launchpool";
import HotAssets from "./hot-assets";

const HomeOne = () => {
  return (
    <>
      <HeaderOne theme="dark" />
      {/* 使用 Tailwind CSS 替换传统类名 */}
      <div className="text-white w-full">
        <div className="relative">
          <main className="w-full overflow-hidden"> 
            <HeroHomeLaunch />
            <HotAssets />  
            {/* <HeroSection /> */}
            <Sat20Wallet />
                    
            <HomeAnimation />          
            {/* <CommunitiesArea bg_style={true} theme="dark" /> */}
           
            <PartnerArea/>
            <FaqArea/>  

          </main>
          <FooterTwo/>
        </div>
      </div>
    </>
  );
};

export default HomeOne;
