import { Box, Divider } from "@mui/material";
import StepCard from "../StepCard";
import DefaultButton from "../DefaultButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CompleteSteps = () => {
  return (
    <Box
      component="div"
      className="flex flex-col justify-center items-center py-10 mt-5 md:mt-10 lg:mt-20 bg-[#17203A] font-openSans"
    >
      <h1 className="font-bold text-4xl text-white mb-3 !font-overpass ">
        How to Start with Cuttle Card
      </h1>
      <h6 className="text-center font-openSans mb-20 lg:mb-0">
        All you need to do to complete your credit card application is
        tocomplete the following <br />
        four steps
      </h6>

      <Box className="w-[80%] lg:h-[300px] relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6  ">
        <Divider
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderTop: "2px dashed white",
            width: "80%",
            height: "4px",
            marginTop: 2,
            marginBottom: 2,
            backgroundImage: "linear-gradient(to right,  white 75%)",
            backgroundSize: "20px 100%",
            display: { xs: "none", lg: "block" },
          }}
        />

        {[
          "Create an Account",
          "Complete KYC",
          "Activation",
          "Collateral Injection",
        ].map((val, idx) => (
          <StepCard key={idx} idx={idx} title={val} />
        ))}
      </Box>

      <DefaultButton endIcon={<ArrowForwardIcon />}>Apply Now</DefaultButton>
    </Box>
  );
};

export default CompleteSteps;
