import React from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

import List from "./components/List";
import Detail from "./components/Detail";
import Add from "./components/Add";
import Update from "./components/Update";
import * as selectors from "./store/selectors";
import { hideNotification } from "./store/actions";

const mapStateToProps = state => ({
  notification: selectors.getNotification(state)
});

function AppRouter({ notification, dispatch }) {
  return (
    <main>
      {notification &&
        <Link
          to="/2"
          onClick={() => {
            dispatch(hideNotification());
          }}
        >
          Fund #2 Has been updated
        </Link>}
      <nav>
        <Link to="/">Funds List</Link>
        <Link to="/add">Add Fund</Link>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/add" component={Add} />
          <Route path="/update/:id" component={Update} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </div>
    </main>
  );
}

export default compose(withRouter, connect(mapStateToProps))(AppRouter);
