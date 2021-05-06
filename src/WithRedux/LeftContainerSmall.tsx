import React from "react";
import Greeting from "./Greeting";

const LeftContainerSmall = () => (
  <div style={{  
    margin: "auto", 
    background: "#55A5A5",
    padding: 50
  }}>
    <Greeting />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerSmall
    </div>
  </div>
)

export default LeftContainerSmall;
