import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {

  return (
    <Stack height={"100vh"} alignItems="center" justifyContent="center">
      <Typography variant="h4" textAlign="center">
        {" "}
        Homepage accessable to all users
      </Typography>

    </Stack>
  );
};

export default Home;
