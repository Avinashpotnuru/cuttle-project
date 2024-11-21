import { Box } from "@mui/material";
import ServiceCard from "../ServiceCard";

import { servicesData } from "../../Data";


const Services = () => {
  return (
    <Box
      component="div"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
    >

      {servicesData.map((item) => (
        <ServiceCard key={item.id} {...item} />
      ))}
      
    </Box>
  );
};

export default Services;
