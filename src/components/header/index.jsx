/* eslint-disable no-unused-vars */
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import CustomButton from "../DefaultButton";

const Header = () => {
  return (
    <Box component="div" className="py-4" marginInlineStart="120px" marginInlineEnd="120px">
      {/* <img src="/Vector.jpg" alt="logo" /> */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <img src="/src/assets/companyLogo.png" />
        <Stack direction="row" spacing={2}>
          {["Home", "Help Center", "About us"].map((item, idx) => (
            <Button key={idx} variant="text" sx={{ color: "#C5CDE9" }}>
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
                    idx === 0 ? "rgba(211, 211, 211, 0.1)" : "primary.main", // Light grey with 50% opacity
                  color: idx === 0 ? "primary.main" : "white",
                  "&:hover": {
                    bgcolor:
                      idx === 0 ? "rgba(211, 211, 211, 0.8)" : "primary.dark", // Slightly darker grey on hover
                  },
                  border: idx === 0 ? "none" : "none", // No border for the "Login" button
                }}
              >
                {item}
              </CustomButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
