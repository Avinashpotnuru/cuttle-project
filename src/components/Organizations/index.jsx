import { Box, Stack, Typography } from "@mui/material";

const Organizations = () => {
  return (
    <Box className="text-[#96A1C2] p-2 flex flex-col justify-center items-center my-4 space-y-3 py-10 ">
      <Typography variant="subtitle1">
        Trusted by teams at over 1,000 of the world’s leading organizations
      </Typography>

      <Stack direction="row" spacing={6}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Box
            key={index}
            component="img"
            src={`/src/assets/Organizations/Organizations${index+1}.png`}
            alt="Organization"            
          />
        ))} 


      </Stack>
    </Box>
  );
};

export default Organizations;
