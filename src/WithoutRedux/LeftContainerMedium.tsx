import React from "react";
import LeftContainerSmall from "./LeftContainerSmall";

interface Props {
  username: string;
}

const LeftContainerMedium = (props: Props) => (
  <div style={{ 
    margin: "auto", 
    background: "#5A5A55",
    padding: 50
  }}>
    <LeftContainerSmall username={props.username} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerMedium
    </div>
  </div>
)

export default LeftContainerMedium;
