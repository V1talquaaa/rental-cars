import styled from "@emotion/styled";
import { AppBar, Typography } from "@mui/material";
import React from "react";


const StyledApp = styled(AppBar)({
    padding: '15px'
})

export const Navbar = () => {
  return (
    <StyledApp position="sticky">
      <Typography variant="h6">V1-Cars</Typography>
    </StyledApp>
  );
};
