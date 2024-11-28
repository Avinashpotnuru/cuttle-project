/* eslint-disable no-unused-vars */

import React from "react";



import {
  Organizations,
  Services,
  MoreInformation,
  CompleteSteps,
  Faq,
  WhyCuttle,
  FundSecurity,
  Banner,
  WorldElite,
  AboutCard,
  Footer,
} from "../components";

const LandingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <Organizations />
      <WhyCuttle />
      <Services />
      <WorldElite />
      <FundSecurity />
      <AboutCard />
      <MoreInformation />
      <CompleteSteps />
      <Faq />
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
