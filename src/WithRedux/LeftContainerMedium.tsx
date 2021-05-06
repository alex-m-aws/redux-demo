import React from "react";
import LeftContainerSmall from "./LeftContainerSmall";

const LeftContainerMedium = () => (
  <div style={{ 
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <LeftContainerSmall />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerMedium
    </div>
  </div>
)

export default LeftContainerMedium;
