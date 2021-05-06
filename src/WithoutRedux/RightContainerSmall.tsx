import React from "react";
import Input from "./Input";

interface Props {
  onChangeUsername: (username: string) => void;
}

const RightContainerSmall = (props: Props) => (
  <div style={{ 
    margin: 25, 
    padding: 50,
    border: "1px solid black",
    borderRadius: "25%"
  }}>
    <div><Input onChange={props.onChangeUsername} /></div>
    <div style={{ paddingTop: 25, fontSize: 12 }}>
      RightContainerSmall
    </div>
  </div>
)

export default RightContainerSmall;
