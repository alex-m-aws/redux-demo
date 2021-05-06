import React, { useState } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import WithoutRedux from "./WithoutRedux/AppContents";
import WithRedux from "./WithRedux/AppContents";
import { FormControlLabel, Switch } from "@material-ui/core";
import { rootReducer } from "./WithRedux/Redux/Root";

const store = createStore(rootReducer);

function App() {
  const [withRedux, setWithRedux] = useState(false);
   return (
    <div style={{ background: "grey", height: "100vh" }}>
      <FormControlLabel
          control={
            <Switch
              checked={withRedux}
              onChange={(_e, checked) => setWithRedux(checked)}
              name="checkedB"
              color="primary"
            />
          }
          label="With Redux"
        />
      <div >
        {withRedux 
          ? 
            <Provider store={store}>
              <WithRedux />
            </Provider> 
          : 
            <WithoutRedux />
        }
      </div>
    </div>
  );
}

export default App;
