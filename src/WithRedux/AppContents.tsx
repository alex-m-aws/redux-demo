import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LeftContainerBig from "./LeftContainerBig";
import RightContainerBig from "./RightContainerBig";
import { clearUsername } from "./Redux/User";

const AppContents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUsername());
  }, []);

  return (
    <div style = {{ display: "flex", width: "100%", height: "100%" }}>
      <LeftContainerBig />
      <RightContainerBig />
    </div>
  )
}

export default AppContents;
