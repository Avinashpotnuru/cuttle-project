import { Box, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FundSecurity = () => {
  return (
    <Box display="flex" bgcolor="#17203A" margin="60px 0px" height="601px">
      <Box className="flex-1 pl-[89px]  flex flex-col justify-start items-start m-auto space-y-6 !font-overpass">
        <h1 className="text-3xl text-white font-semibold ">Fund Security</h1>
        <h6>
          By choosing PassTo credit card, you will enjoy globally accepted{" "}
          <br />
          in-store transactions, local and overseas cash withdrawal,
        </h6>
        <Box className="space-y-6 font-inter">
          {["Transaction Notification", "3DS", "Instant Card Lock", "CVC2"].map(
            (val, idx) => (
              <Stack key={idx} direction="row" gap={2}>
                <img src={`/src/assets/icons/icon${idx + 1}.png`} alt={idx} />

                <p className="font-inter">{val}</p>
              </Stack>
            )
          )}
        </Box>

        <Button
          sx={{ color: "primary.main", background: "#232F52" }}
          endIcon={<ArrowForwardIcon />}
          variant="contained"
        >
          Learn More
        </Button>
      </Box>
      <Box flex={1} textAlign="center">
        <img className="w-full h-full" src="/src/assets/fundSecurity.png" />
      </Box>
    </Box>
  );
};

export default FundSecurity;
