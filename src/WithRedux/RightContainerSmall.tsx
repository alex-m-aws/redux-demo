import React from "react";
import Input from "./Input";

const RightContainerSmall = () => (
  <div style={{ 
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <div><Input /></div>
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerSmall
    </div>
  </div>
)

export default RightContainerSmall;
