import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import AboutArea from "../../../common/about-area";
import RankArea from "../home/rank-area";
import PaymentMethodArea from "./payment-method-area";
import TeamArea from "../home/team-area";
import FeatureArea from "./feature-area";
// import ServiceArea from "./service-area";
// import TestimonialArea from "./testimonial-area";

const HomeTwo = () => {
  return (
    <>

      <HeaderTwo />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix"> 
    
      <HeroArea />
      <AboutArea />
{/*       <CtaArea />  */}
      <PaymentMethodArea />
      <TeamArea bg_style={true} />
      {/* <ServiceArea /> */}
      <RankArea />
      {/* <TestimonialArea /> */}
      <FeatureArea/>
      <FaqArea />      
      </main>
      <FooterTwo />
      </div>
      </div>

    </>
  );
};

export default HomeTwo;
