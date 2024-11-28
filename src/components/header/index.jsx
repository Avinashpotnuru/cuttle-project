/* eslint-disable no-unused-vars */
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "../DefaultButton";

import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import Divider from "@mui/material/Divider";

import  companyLogo  from  "../../assets/companyLogo.png";
import { Link } from "react-router-dom";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const checkScreenWidth = () => {
    setIsLgScreen(window.innerWidth >= 1023);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const drawerContents = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        bgcolor: "#17203A",
        color: "#C5CDE9",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {["Home", "Help Center", "About us"].map((item, idx) => (
        <Button
          key={idx}
          sx={{
            color: "#C5CDE9",
            marginBottom: "15px",
            fontSize: "16px",
            fontWeight: 500,
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: "#C5CDE9",
              color: "#17203A",
            },
          }}
          onClick={() => setDrawerOpen(false)}
        >
          {item}
        </Button>
      ))}
      {["Login", "Register Now"].map((item, idx) => (
        <CustomButton
          key={idx}
          variant={idx === 0 ? "text" : "contained"}
          sx={{
            marginTop: "10px",
            bgcolor: idx === 0 ? "rgba(211, 211, 211, 0.1)" : "primary.main",
            color: idx === 0 ? "primary.main" : "white",
            padding: "10px 15px",
            fontSize: "14px",
            textTransform: "uppercase",
            "&:hover": {
              bgcolor: idx === 0 ? "rgba(211, 211, 211, 0.8)" : "primary.dark",
              color: "white",
            },
            marginBottom: "10px",
            borderRadius: "0px",
          }}
          onClick={() => setDrawerOpen(false)}
        >
          {item}
        </CustomButton>
      ))}
    </Box>
  );

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
      <AppBar
        position="sticky"
        sx={{ backgroundColor: " rgba(34, 46, 82, 1)", boxShadow: "none" }}
      >
        <Toolbar className="px-4 sm:px-12">
          <Box
            component="div"
            className="flex justify-between items-center w-full"
          >
            {/* Logo Section */}
            <img src={companyLogo} className="w-[150px] sm:w-[200px]" />

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                display: isLgScreen ? "flex" : "none",
              }}
            >
              <Stack direction="row" spacing={2} className="mt-4 sm:mt-0">
                {["Home", "Help Center", "About us"].map((item, idx) => (
                  <Button key={idx} sx={{ color: "#C5CDE9" }}>
                    {item}
                  </Button>
                ))}
                <Stack direction="row" spacing={2}>
                  {["Login", "Register Now"].map((item, idx) => (
                    <CustomButton
                      key={idx}
                      variant={idx === 0 ? "text" : "contained"}
                      sx={{
                        bgcolor:
                          idx === 0
                            ? "rgba(211, 211, 211, 0.1)"
                            : "primary.main",
                        color: idx === 0 ? "primary.main" : "white",
                        "&:hover": {
                          bgcolor:
                            idx === 0
                              ? "rgba(211, 211, 211, 0.8)"
                              : "primary.dark",
                        },
                      }}
                    >
                      <Link to={idx === 0 ? "/login" : "/register"}>{item}</Link>
                    </CustomButton>
                  ))}
                </Stack>
              </Stack>
            </Stack>

            <IconButton
              color="inherit"
              edge="end"
              // sx={{ display: { xs: "block", lg: "none" } }}
              sx={{ display: isLgScreen ? "none" : "flex" }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#17203A",
              color: "#C5CDE9",
            },
          }}
        >
          {drawerContents}
        </Drawer>
      </AppBar>
    </>
  );
}

export default Header;
