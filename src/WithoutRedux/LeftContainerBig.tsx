import React from "react";
import LeftContainerMedium from "./LeftContainerMedium";

interface Props {
  username: string;
}

const LeftContainerBig = (props: Props) => (
  <div style={{ 
    width: "50%", 
    margin: 25,  
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <LeftContainerMedium username={props.username} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerBig
    </div>
  </div>
)

export default LeftContainerBig;
