/* eslint-disable no-unused-vars */
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import CustomButton from "../DefaultButton";

const Header = () => {
  return (
    <Box component="div" className="p-2">
      {/* <img src="/Vector.jpg" alt="logo" /> */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <h2>cuttle card</h2>
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
                variant="contained"
                sx={{
                  bgcolor: idx === 0 ? "#232f52" : "primary.main",
                  color: idx === 0 ? "primary.main" : "white",
                  border: idx === 0 ? "2px solid #96A1C2" : "none",
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
