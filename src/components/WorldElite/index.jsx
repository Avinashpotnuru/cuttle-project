import { Box, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DefaultButton from "../DefaultButton";

const WorldElite = () => {
  return (
    <Box display="flex" margin="60px 80px">
      <Box flex={1} textAlign="center">
        <img src="/src/assets/creditCard.png" />
      </Box>
      <Box className="flex-1 px-[89px] flex flex-col justify-start items-start m-auto space-y-8">
        <h1 className="text-3xl">WORLD ELITE Credit Card </h1>
        <Stack
          direction="row"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <img src="/src/assets/complete.png" />
          <h1>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when t is a long established fact
            that a reader will be distracted long fact that.
          </h1>
        </Stack>
        <Stack
          direction="row"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <img className="h-[14px] w-[14px]" src="/src/assets/complete.png" />
          <h1>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when t is a long established fact
            that a reader will be distracted long fact that.
          </h1>
        </Stack>

        <DefaultButton endIcon={<ArrowForwardIcon />}>Apply Now</DefaultButton>
      </Box>
    </Box>
  );
};

export default WorldElite;
