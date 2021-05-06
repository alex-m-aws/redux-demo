import React, { useState } from "react";
import LeftContainerBig from "./LeftContainerBig";
import RightContainerBig from "./RightContainerBig";

const AppContents = () => {
  const [username, setUsername] = useState("");

  return (
    <div style = {{ display: "flex", width: "100%", height: "100%" }}>
      <LeftContainerBig username={username}/>
      <RightContainerBig onChangeUsername={setUsername} />
    </div>
  )
}

export default AppContents;
