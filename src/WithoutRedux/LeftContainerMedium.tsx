import React from "react";
import LeftContainerSmall from "./LeftContainerSmall";

interface Props {
  username: string;
}

const LeftContainerMedium = (props: Props) => (
  <div style={{ 
    margin: "auto", 
    background: "#AFAFAA",
    padding: 50
  }}>
    <LeftContainerSmall username={props.username} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      LeftContainerMedium
    </div>
  </div>
)

export default LeftContainerMedium;
