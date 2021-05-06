import React from "react";
import Input from "./Input";

interface Props {
  onChangeUsername: (username: string) => void;
}

const RightContainerSmall = (props: Props) => (
  <div style={{ 
    margin: "auto", 
    background: "#AAAAFF",
    padding: 50
  }}>
    <div><Input onChange={props.onChangeUsername} /></div>
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerSmall
    </div>
  </div>
)

export default RightContainerSmall;
