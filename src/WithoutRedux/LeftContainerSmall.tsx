import React from "react";
import Greeting from "./Greeting";

interface Props {
  username: string;
}

const LeftContainerSmall = (props: Props) => (
  <div style={{  
    margin: "auto", 
    background: "#AAFAFA",
    padding: 50
  }}>
    <Greeting username={props.username} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerSmall
    </div>
  </div>
)

export default LeftContainerSmall;
