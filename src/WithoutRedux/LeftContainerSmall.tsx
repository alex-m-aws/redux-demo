import React from "react";
import Greeting from "./Greeting";

interface Props {
  username: string;
}

const LeftContainerSmall = (props: Props) => (
  <div style={{  
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <Greeting username={props.username} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerSmall
    </div>
  </div>
)

export default LeftContainerSmall;
