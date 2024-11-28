/* eslint-disable react/prop-types */

import { Box } from "@mui/material";

import { Header, Footer } from "../components";

const Layout = ({ children }) => {
  return (
    <Box component="div">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
