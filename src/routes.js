import React from "react";
import { Route, Link } from "react-router-dom";

import List from "./components/List";
import Detail from "./components/Detail";

export default function() {
  return (
    <main>
      <nav>
        <Link to="/">Funds List</Link>
      </nav>
      <div>
        <Route exact path="/" component={List} />
        <Route path="/:id" component={Detail} />
      </div>
    </main>
  );
}
