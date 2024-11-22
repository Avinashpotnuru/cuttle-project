import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
 
const WhyCuttle = () => {
  return (
    <Box
      className="flex flex-col lg:flex-row bg-[#17203A] my-[60px] py-12 md:py-20 lg:py-0 space-y-4 md:space-y-8 lg:space-y-0 "
      
     
    >
      <Box className="flex-1 px-5 lg:px-[89px]  flex flex-col justify-start items-start m-auto space-y-5 md:space-y-8 lg:space-y-6 font-overpass">
        <h1 className="text-4xl text-white">Why Cuttle Card ? </h1>
        <h6>
          By choosing Cuttle Card credit card, you will enjoy globally accepted
          in-store transactions, local and overseas cash withdrawal, making your
          travel and work more convenient. You can also shop online anytime,
          whether you need to pay millions of dollars for insurance.
        </h6>

        <Button
          sx={{ color: "primary.main", background: "#232F52" }}
          endIcon={<ArrowForwardIcon />}
          variant="contained"
        >
          Read More
        </Button>
      </Box>
      <Box flex={1} textAlign="center">
        <img src="/src/assets/why.png" />
      </Box>
    </Box>
  );
};

export default WhyCuttle;
