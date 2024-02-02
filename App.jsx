import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./src/components/Layout";
import Main from "./main";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;