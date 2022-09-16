import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import  {View}  from "./components/ViewUser";
import Landing from "./components/landing";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ margin: " auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Landing} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
            <Route path="/view/:id" component={View} />
            <Route exact path="/admindash104" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
