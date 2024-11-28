import { Box } from "@mui/material";
import ServiceCard from "../ServiceCard";

import { servicesData } from "../../Data";


const Services = () => {
  return (
    <Box
      component="div"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-5 mx-[20px] lg:mx-[60px] xl:mx-[160px] font-openSans"
    >

      {servicesData.map((item) => (
        <ServiceCard key={item.id} {...item} />
      ))}
      
    </Box>
  );
};

export default Services;
