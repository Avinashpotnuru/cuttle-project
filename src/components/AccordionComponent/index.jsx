/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import AddIcon from "@mui/icons-material/Add";

const AccordionComponent = ({title}) => {
  return (
    <Accordion
      sx={{
        bgcolor: "transparent",
        color: "#96A1C2",
        borderBottom: "1px solid #96A1C2", // Add a light border at the bottom
        boxShadow: "0px 2px 5px rgba(189, 182, 182, 0.1)", // Add a subtle shadow
      }}
    >
      <AccordionSummary
        expandIcon={<AddIcon sx={{ color: "primary.main" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
       {title}
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
