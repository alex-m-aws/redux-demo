import React from "react";
import LeftContainerSmall from "./LeftContainerSmall";

const LeftContainerMedium = () => (
  <div style={{ 
    margin: "auto", 
    background: "#5A5A55",
    padding: 50
  }}>
    <LeftContainerSmall />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerMedium
    </div>
  </div>
)

export default LeftContainerMedium;
