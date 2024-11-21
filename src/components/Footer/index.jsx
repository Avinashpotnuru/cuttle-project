import { Box, Stack } from "@mui/material";

import { footerData } from "../../Data";

const Footer = () => {
  const hyperLinkComponent = (data, idx) => {
    return (
      <Box key={idx}>
        <h1 className="text-2xl pb-5">{data.title}</h1>

        {data.links.map((val, idx) => (
          <Stack direction="row" alignItems="center" key={idx} gap={2}>
            {data.title === "Reach us" && (
              <img
                src={`/src/assets/contact/contact${idx + 1}.png`}
                alt={`contact ${idx + 1}`}
              />
            )}
            <p className="py-2">
              {val}
              {data.title === "Quick Links" &&
                idx === 4 &&
                val === "Careers" && (
                  <span className="ml-2 text-yellow-300 font-nanum-pen nanum-pen-script-regular">
                    {"We’re hiring"}
                  </span>
                )}
            </p>
          </Stack>
        ))}
      </Box>
    );
  };
  return (
    <Box className="h-[470px]  bg-[#1c2746]  opacity-75  relative flex justify-center items-center mt-20 ">
      <img src="/src/assets/footer.png" className="absolute right-0 " />
      <Box className="   grid grid-cols-4 gap-8 px-[120px] py-[60px] text-white">
        <Box className="flex flex-col justify-around items-baseline h-[254px]">
          <img src="/src/assets/companyLogo.png" />
          <p>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
          </p>
          <Stack direction="row" gap={1}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <Box
                key={idx}
                className="flex justify-start items-center  w-[24px] h-[24px] rounded-full"
              >
                <img src={`/src/assets/socialMedia/icon${idx + 1}.png`} />
              </Box>
            ))}
          </Stack>
        </Box>

        {footerData.map((data, idx) => hyperLinkComponent(data, idx))}
      </Box>
    </Box>
  );
};

export default Footer;
