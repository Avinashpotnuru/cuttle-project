/* eslint-disable react/prop-types */
import { Box } from "@mui/material";


const StepCard = ({ idx,title }) => {
  return (
    <Box className="bg-[#1c2746] h-[120px] flex flex-col justify-center items-center rounded-xl  relative z-10">
      <Box className="flex justify-center items-center rounded-full bg-[#32416c] h-[70px] w-[70px] absolute top-[-37px] left-[50%] transform -translate-x-1/2">
        <img src={`/src/assets/steps/step${idx + 1}.png`} alt={idx} />
         
      </Box>
      <h1>{title}</h1>
    </Box>
  );
};

export default StepCard
