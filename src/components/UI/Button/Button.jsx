import styled from "@emotion/styled";
import { Button as MuiButton } from "@mui/material";

export const MoreDetailed = styled(MuiButton)({
  width: "145px",
  height: "45px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  color: "rgba(186, 226, 73, 1)",
  fontSize: "16px",
  fontWeight: " 400",
  lineHeight: "22px",
  letterSpacing: "0%",
  textTransform: "none",
  boxShadow: "none",
  border: "1px solid rgba(186, 226, 73, 1)",
  "&:hover": {
    backgroundColor: "rgba(186, 226, 73, 1)",
    color: "rgba(11, 25, 25, 1)",
    border: "none",
  },
  "&:focus": {
    width: "151px",
    height: "51px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px",
    backgroundColor: "transparent",
    boxShadow: "inset 0 0 0 1px rgba(131, 164, 64, 1)",
  },
  "&:active": {
    backgroundColor: "rgba(104, 139, 5, 1)",
    color: "rgba(11, 25, 25, 1)",
    border: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: "transparent",
    border: "1px solud rgba(137, 157, 157, 1)",
    color: "#9e9e9e",
  },
});
MoreDetailed.defaultProps = {
  disableRipple: true,
  disableElevation: true,
};
