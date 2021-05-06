import React from "react";
import RightContainerSmall from "./RightContainerSmall";

interface Props {
  onChangeUsername: (username: string) => void;
}

const RightContainerMedium = (props: Props) => (
  <div style={{ 
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <RightContainerSmall onChangeUsername={props.onChangeUsername} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerMedium
    </div>
  </div>
)

export default RightContainerMedium;
