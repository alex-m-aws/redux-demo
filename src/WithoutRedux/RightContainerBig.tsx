import React from "react";
import RightContainerMedium from "./RightContainerMedium";

interface Props {
  onChangeUsername: (username: string) => void;
}

const RightContainerBig = (props: Props) => (
  <div style={{ 
    width:"50%",
    margin: "auto", 
    background: "#AA5555",
    padding: 50
  }}>
    <RightContainerMedium onChangeUsername={props.onChangeUsername} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerBig
    </div>
  </div>
)

export default RightContainerBig;
