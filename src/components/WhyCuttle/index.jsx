import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
 
const WhyCuttle = () => {
  return (
    <Box display="flex" bgcolor="#17203A" margin="60px 20px">
      <Box className="flex-1 px-[89px] flex flex-col justify-start items-start m-auto space-y-6"  >
        <h1 className="text-3xl">Why Cuttle Card ? </h1>
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
