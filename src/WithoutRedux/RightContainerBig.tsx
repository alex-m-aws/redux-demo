import React from "react";
import RightContainerMedium from "./RightContainerMedium";

interface Props {
  onChangeUsername: (username: string) => void;
}

const RightContainerBig = (props: Props) => (
  <div style={{ 
    width:"50%",
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <RightContainerMedium onChangeUsername={props.onChangeUsername} />
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerBig
    </div>
  </div>
)

export default RightContainerBig;
