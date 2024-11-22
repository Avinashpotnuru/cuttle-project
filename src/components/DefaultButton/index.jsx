import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const DefaultButton = styled(Button)(({ theme }) => ({
  backgroundColor: "orange", 
  color: "white",
  padding: theme.spacing(1, 3), 
  borderRadius: "4px", 
  fontSize: "14px", 
  textTransform: "none",
  fontWeight: "bold", 
  boxShadow: theme.shadows[2], 
  "&:hover": {
    backgroundColor: "#e68a00", 
    boxShadow: theme.shadows[4], 
  },
  "&:active": {
    backgroundColor: "#cc7700", 
  },
  "&:disabled": {
    backgroundColor: "#f5b880", 
    color: "#ffffff80", 
  },
}));
export default DefaultButton;
