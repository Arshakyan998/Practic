import React from "react";
import { Redirect, Route,Switch } from "react-router";

import Main from "./components/Main";
import PageById from "./components/PageById";

function App() {
  return (
    <div className="App">
      <Switch> 
        <Route path="/posts" component={Main} exact/>
        <Route path="/posts/:id" component={PageById}/>
         <Redirect to="/posts"/>
        </Switch>
    
    </div>
  );
}

export default App;
