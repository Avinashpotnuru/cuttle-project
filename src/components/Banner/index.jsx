import { Box } from "@mui/material";
import DefaultButton from "../DefaultButton";


const Banner = () => {
  return (
    <Box  className="flex justify-center gap-[60px] items-center mx-[60px] my-[80px]">
      <Box className="flex-1  flex flex-col justify-start items-start m-auto  bg-[url('/src/assets/world2.png')] space-y-6 bg-cover bg-center py-24">
        <h1 className="text-3xl">
          Cuttle Card <br />
          Multi-Asset Collateral
          <br /> Credit Card
        </h1>
        <h6>Unlimited Credit Limit Single Transaction Up To $5,000,000</h6>
        <p>
          The credit limit is set based on the value of collateral, supporting
          securities, properties, etc
        </p>
        <DefaultButton>Get Started</DefaultButton>
      </Box>
      <Box flex={1} textAlign="center">
        <img src="/src/assets/banner.png" />
      </Box>
    </Box>
  );
}

export default Banner
