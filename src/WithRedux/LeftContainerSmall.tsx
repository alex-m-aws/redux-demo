import React from "react";
import Greeting from "./Greeting";

const LeftContainerSmall = () => (
  <div style={{  
    margin: "auto", 
    background: "#AAFAFA",
    padding: 50
  }}>
    <Greeting />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerSmall
    </div>
  </div>
)

export default LeftContainerSmall;
