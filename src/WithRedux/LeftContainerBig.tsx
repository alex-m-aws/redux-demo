import React from "react";
import LeftContainerMedium from "./LeftContainerMedium";

const LeftContainerBig = () => (
  <div style={{ 
    width: "50%", 
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <LeftContainerMedium />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerBig
    </div>
  </div>
)

export default LeftContainerBig;
