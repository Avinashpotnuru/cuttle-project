/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import DefaultButton from "../DefaultButton";

const  ServiceCard = ({ img, title, desc}) => {
  return (
    <Box
      component="div"
      className="border-t-4 border-yellow-500 flex flex-col justify-center items-center space-y-6 rounded-md p-6"
    >
      <img src={img} alt={title} />
      <h1 className="text-[18px] font-semibold text-white">{title}</h1>
      <p className="text-center text-sm">{desc}</p>
      <DefaultButton className="font-openSans text-sm" variant="contained">Known More</DefaultButton>
    </Box>
  );
};

export default ServiceCard;
