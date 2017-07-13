import React from "react";
import { bindActionCreators } from "redux";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Grid, Row, Col, Nav, Navbar, NavItem } from "react-bootstrap";
import styled from "styled-components";

import List from "./components/List";
import Detail from "./components/Detail";
import Add from "./components/Add";
import Update from "./components/Update";
import { getNotification } from "./store/selectors";
import { hideNotification } from "./store/actions";

const mapStateToProps = state => ({
  notification: getNotification(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ hideNotification }, dispatch);
};

function AppRouter({ notification, hideNotification, className }) {
  return (
    <main className={className}>
      {notification &&
        <div className="alert alert-success">
          <strong>Success</strong> - Fund #2 has been updated. Go{" "}
          <Link to="/2" onClick={hideNotification}>
            here
          </Link>{" "}
          to see fund details
        </div>}
      <Navbar>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">IT Works</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="/">Funds</Link>
            </NavItem>
            <NavItem>
              <Link to="/add">Add Fund</Link>
            </NavItem>
          </Nav>
        </Grid>
      </Navbar>
      <Grid>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/add" component={Add} />
          <Route path="/update/:id" component={Update} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </Grid>
    </main>
  );
}

const AppRouterStyled = styled(AppRouter)`
  a {
    &:hover, &:active, &:visited, &:focus {
      text-decoration: none;
    }
  }
`;

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AppRouterStyled);
