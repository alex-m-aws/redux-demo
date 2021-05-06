import React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  username: string;
}

const Greeting = (props: Props) => (
  <Typography variant="h6">
    {`Hello ${props.username}`}
  </Typography>
)

export default Greeting;
