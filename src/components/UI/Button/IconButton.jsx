import styled from "@emotion/styled";
import { IconButton as MuiIconButton } from "@mui/material";
import React, { useState } from "react";

export const IconButton = React.forwardRef(
  ({ onClick, disabled, children, variant, ...props }, ref) => {
    const [active, setActive] = useState(false);
    const handleClick = (e) => {
      setActive((prev) => !prev);
      if (onClick) onClick(e);
    };

    return (
      <StyledMuiIconButton
        ref={ref}
        onClick={handleClick}
        disabled={disabled}
        variant={variant}
        className={active ? "active" : ""}
        {...props}
      >
        {children}
      </StyledMuiIconButton>
    );
  }
);
const StyledMuiIconButton = styled(MuiIconButton)({
//   width: "58px",
//   height: "58px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    color: "#FFFFFF",
    fontSize: 28,
  },

  "&:hover": {
    background: "#454444",
    "& svg": { color: " rgba(186, 226, 73, 1)" },
  },

  "&:active": {
    background: "#454444",
    "& svg": { color: "rgba(104, 139, 5, 1))" },
  },

  "&.active svg": {
    color: "red",
  },

  "&.Mui-disabled": {
    backgroundColor: "#454444",
    "& svg": { color: "rgba(137, 157, 157, 1))" },
  },
});
