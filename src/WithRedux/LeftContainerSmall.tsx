import React from "react";
import Greeting from "./Greeting";

const LeftContainerSmall = () => (
  <div style={{  
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <Greeting />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerSmall
    </div>
  </div>
)

export default LeftContainerSmall;
