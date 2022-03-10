import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";

const MainLayout: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Outlet />
    </Container>
  );
};

export default MainLayout;
