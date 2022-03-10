import React from "react";

import { Box } from "@mui/material";
import ProtoBufferForm from "../../forms/ProtoBufferForm";

const Home: React.FC = () => {
  return (
    <Box>
      <h1>Configuration</h1>
      <ProtoBufferForm />
    </Box>
  );
};

export default Home;
