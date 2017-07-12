import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import List from "./components/List";
import Detail from "./components/Detail";
import Add from "./components/Add";

export default function() {
  return (
    <main>
      <nav>
        <Link to="/">Funds List</Link>
        <Link to="/add">Add Fund</Link>
      </nav>
      <div>
        <Route exact path="/" component={List} />
        <Switch>
          <Route exact path="/add" component={Add} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </div>
    </main>
  );
}
