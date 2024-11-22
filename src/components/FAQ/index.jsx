import { Box} from "@mui/material";
import AccordionComponent from "../AccordionComponent";
import faqData from "../../Data/faqData";


const Faq= () => {
  return (
    <Box bgcolor="#161F36" component="div" className=" mx-auto px-[20px] lg:px-[120px] py-[60px] font-montserrat ">
      <h1 className="text-2xl font-bold text-white py-3 ">
        Frequently Aksed Questions
      </h1>
      <Box className="mt-4 space-y-6">
        {faqData.map((data, idx) => (
          <AccordionComponent {...data} key={idx} />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
