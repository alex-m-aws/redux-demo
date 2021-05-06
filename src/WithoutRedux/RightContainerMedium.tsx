import React from "react";
import RightContainerSmall from "./RightContainerSmall";

interface Props {
  onChangeUsername: (username: string) => void;
}

const RightContainerMedium = (props: Props) => (
  <div style={{ 
    margin: "auto", 
    background: "#AAFFAA",
    padding: 50
  }}>
    <RightContainerSmall onChangeUsername={props.onChangeUsername} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerMedium
    </div>
  </div>
)

export default RightContainerMedium;
