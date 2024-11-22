import { Box, Stack } from "@mui/material";

import { footerData } from "../../Data";

const Footer = () => {
  const hyperLinkComponent = (data, idx) => {
    return (
      <Box key={idx}>
        <h1 className="text-2xl  pb-5">{data.title}</h1>

        {data.links.map((val, idx) => (
          <Stack direction="row" alignItems="center" key={idx} gap={2}>
            {data.title === "Reach us" && (
              <img
                src={`/src/assets/contact/contact${idx + 1}.png`}
                alt={`contact ${idx + 1}`}
              />
            )}
            <p className="py-2 text-sm font-normal">
              {val}
            
            </p>
          </Stack>
        ))}
      </Box>
    );
  };
  return (
    <Box className="lg:h-[470px]   bg-[#1c2746]  opacity-75  relative flex flex-col justify-center items-center mt-0 font-inter ">
      <img src="/src/assets/footer.png" className="absolute right-0 " />
      <Box className="  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 px-5 lg:px-[120px] py-[60px] text-white ">
        <Box className="flex flex-col  justify-around items-baseline h-[254px]">
          <img src="/src/assets/companyLogo.png" />
          <p>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
          </p>
          <Stack direction="row" gap={1}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <Box
                key={idx}
                className="flex justify-center items-center  w-[24px] h-[24px] rounded-full bg-clip-padding bg-gray-100  backdrop-filter backdrop-blur-sm bg-opacity-20"
              >
                <img src={`/src/assets/socialMedia/icon${idx + 1}.png`} />
              </Box>
            ))}
          </Stack>
        </Box>

        {footerData.map((data, idx) => hyperLinkComponent(data, idx))}
      </Box>
      <Box className="flex flex-col lg:flex-row  text-center space-y-2 lg:space-y-0 justify-between items-center w-[85%] text-white pb-5">
        <h1>© 2024 Cuttle Card. All rights reserved</h1>
        <h1>Terms & Conditions | Privacy Policy | Sitemap | Disclaimer</h1>
      </Box>
    </Box>
  );
};

export default Footer;
