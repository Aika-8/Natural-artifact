import styled from "@emotion/styled";
import { IconButton as MuiIconButton } from "@mui/material";
import React, { useState } from "react";

export const IconButton = React.forwardRef(
  ({ onClick, disabled, children, variant, customFrame }, ref) => {
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
        customFrame={customFrame}
        className={active ? "active" : ""}
      >
        {children}
      </StyledMuiIconButton>
    );
  }
);

const StyledMuiIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== "customFrame",
})(({ customFrame }) => ({
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: customFrame ? "#1d2f30" : "transparent",
  "& svg": {
    color: customFrame ? "rgba(186, 226, 73, 1)" : "#FFFFFF",
    fontSize: 28,
  },
}));
