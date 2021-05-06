import React from "react";
import RightContainerSmall from "./RightContainerSmall";

const RightContainerMedium = () => (
  <div style={{ 
    margin: "auto", 
    background: "#AAFFAA",
    padding: 50
  }}>
    <RightContainerSmall />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerMedium
    </div>
  </div>
)

export default RightContainerMedium;
