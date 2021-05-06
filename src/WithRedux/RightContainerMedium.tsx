import React from "react";
import RightContainerSmall from "./RightContainerSmall";

const RightContainerMedium = () => (
  <div style={{ 
    margin: 25,  
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <RightContainerSmall />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerMedium
    </div>
  </div>
)

export default RightContainerMedium;
