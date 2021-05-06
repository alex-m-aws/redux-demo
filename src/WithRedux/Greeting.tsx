import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { RootState } from "./Redux/Root";

const Greeting = () => {
  const username = useSelector((state: RootState) => state.userState.username);
  return (
    <Typography variant="h6">
      {`Hello ${username}`}
    </Typography>
  );
}

export default Greeting;
