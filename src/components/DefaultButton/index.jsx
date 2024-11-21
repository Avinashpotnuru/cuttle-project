import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const DefaultButton = styled(Button)(({ theme }) => ({
  backgroundColor: "orange", // Default background color
  color: "white", // Text color
  padding: theme.spacing(1, 3), // Vertical and horizontal padding
  borderRadius: "4px", // Rounded corners
  fontSize: "16px", // Font size
  textTransform: "none",
  fontWeight: "bold", // Disable uppercase text
  boxShadow: theme.shadows[2], // Subtle shadow
  "&:hover": {
    backgroundColor: "#e68a00", // Darker orange on hover
    boxShadow: theme.shadows[4], // Increased shadow on hover
  },
  "&:active": {
    backgroundColor: "#cc7700", // Even darker orange when active
  },
  "&:disabled": {
    backgroundColor: "#f5b880", // Light orange for disabled state
    color: "#ffffff80", // Light white for disabled text
  },
}));
export default DefaultButton;
