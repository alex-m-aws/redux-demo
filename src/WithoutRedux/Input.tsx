import React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  onChange: (value: string) => void;
}

const Input = (props: Props) => (
  <TextField
    label="Enter your name here"
    onChange={(event) => props.onChange(event.target.value)}
  />
)

export default Input;
