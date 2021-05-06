import React from "react";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeUsername } from "./Redux/User";

const Input = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      label="Enter your name here"
      onChange={(event) => dispatch(changeUsername(event.target.value))}
    />
  );
}

export default Input;
