import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "@fontsource/overpass";


const MoreInformation = () => {
  return (
    <Stack
      direction="row"
      sx={{
        bgcolor: "primary.main",
        padding: "40px 120px",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        marginTop: "60px",
      }}
    >
      <Box sx={{ fontFamily: "Overpass, sans-serif" }}>
        <h1 className="font-normal text-[26px]">APPLY YOUR EXCLUSIVE CREDIT CARD NOW</h1>
        <p className="font-openSans text-base font-light ">
          There are many variations of passages of Lorem Ipsum available, but{" "}
          <br />
          the majority have suffered alteration in some form
        </p>
      </Box>
      <Button
        variant="outlined"
        endIcon={<ArrowForwardIcon />}
        sx={{
          color: "white",
          borderColor: "white",
          padding: "10px 40px",
          "&:hover": {
            borderColor: "white",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        Get more information
      </Button>
    </Stack>
  );
};

export default MoreInformation;
