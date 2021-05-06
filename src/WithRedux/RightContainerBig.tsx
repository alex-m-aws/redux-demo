import React from "react";
import RightContainerMedium from "./RightContainerMedium";

const RightContainerBig = () => (
  <div style={{ 
    width:"50%",
    margin: "auto", 
    background: "#FFAAAA",
    padding: 50
  }}>
    <RightContainerMedium />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerBig
    </div>
  </div>
)

export default RightContainerBig;
