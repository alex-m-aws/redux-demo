import React from "react";
import RightContainerMedium from "./RightContainerMedium";

const RightContainerBig = () => (
  <div style={{ 
    width:"50%",
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <RightContainerMedium />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerBig
    </div>
  </div>
)

export default RightContainerBig;
