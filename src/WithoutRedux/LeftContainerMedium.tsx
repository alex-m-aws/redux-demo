import React from "react";
import LeftContainerSmall from "./LeftContainerSmall";

interface Props {
  username: string;
}

const LeftContainerMedium = (props: Props) => (
  <div style={{ 
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <LeftContainerSmall username={props.username} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerMedium
    </div>
  </div>
)

export default LeftContainerMedium;
