/* eslint-disable no-unused-vars */
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import Divider from "@mui/material/Divider";
import Header from "../components/header";

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
      <Box
        className="text-[#96A1C2] p-2 mx-auto sm:mx-[60px] lg:mx-[120px]"
        component="div"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }} // Change direction to column for small screens and row for larger ones
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography variant="subtitle1" gutterBottom>
            Welcome to Cuttle Card
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon />
              <Typography variant="body1">yourmeail@domain.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneEnabledIcon />
              <Typography variant="body1">+1 (23) 3356 556</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Divider
        sx={{
          backgroundColor: "#222e52",
          marginTop: "10px",
          height: { xs: "1px", sm: "1px", md: "2px" }, // Adjust height for different screens
          borderWidth: "1px",
        }}
      />

      <Header />
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
      <Footer />
    </>
  );
};

export default LandingPage;
