import React from "react";
import LeftContainerMedium from "./LeftContainerMedium";

const LeftContainerBig = () => (
  <div style={{ 
    width: "50%", 
    margin: "auto",  
    background: "#FAFAAA",
    padding: 50
  }}>
    <LeftContainerMedium />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerBig
    </div>
  </div>
)

export default LeftContainerBig;