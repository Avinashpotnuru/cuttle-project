import { Box} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DefaultButton from "../DefaultButton";

const AboutCard = () => {
  return (
    <Box
      className="lg:py-[60px] lg:px-[80px] lg:h-[515px] flex justify-center items-center"
      
    >
      <Box className="flex lg:flex-row flex-col justify-center items-center bg-[#17203A] lg:h-[376px]"> 
        <Box className="flex-1 pl-[30px]  flex flex-col justify-start items-start m-auto  space-y-6 w-full font-overpass">
          <h1 className="text-3xl text-white font-semibold ">
            About Cuttle Card{" "}
          </h1>
          <Box className="space-y-3 mr-11 font-openSans">
            <h6 className="text-sm">
              The Cuttle Card credit card is operated by King Dynasty Capital
              Limited.Cuttle Card Credit Card has a distinct legal operating
              entity, information security standards, and KYC/AML guidelines.
            </h6>
            <h6 className="text-sm">
              The PassTo credit card is operated by King Dynasty Capital
              Limited. Cuttle Card Credit Card has a distinct legal operating
              entity, information security standards, and KYC/AML guidelines.
            </h6>
          </Box>
          <DefaultButton endIcon={<ArrowForwardIcon />}>
            Known More
          </DefaultButton>
        </Box>
        <Box flex={1} textAlign="center">
          <img className="h-full w-full" src="/src/assets/aboutCard.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
