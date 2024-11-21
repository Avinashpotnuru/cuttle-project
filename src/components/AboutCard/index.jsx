import { Box} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DefaultButton from "../DefaultButton";

const AboutCard = () => {
  return (
    <Box padding="60px 80px">
      <Box display="flex" bgcolor="#17203A">
        <Box className="flex-1 px-[89px]  flex flex-col justify-start items-start m-auto  space-y-4">
          <h1 className="text-2xl ">About Cuttle Card </h1>
          <Box className="space-y-3">
            <h6 className="text-sm">
              The Cuttle Card credit card is operated by King Dynasty Capital
              Limited.Cuttle Card Credit Card has a distinct legal operating
              entity, information security standards, and KYC/AML guidelines.
              The PassTo credit card is operated by King Dynasty Capital
              Limited. Cuttle Card Credit Card has a distinct legal operating
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
          <img src="/src/assets/aboutCard.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
