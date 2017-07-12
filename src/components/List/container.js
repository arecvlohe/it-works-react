import React, { Component } from "react";
import { compose } from "recompose";
import axios from "axios";

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        funds: []
      };
    }

    componentDidMount() {
      axios.get(API).then(({ data }) => {
        this.setState({ funds: data });
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}

export default compose(handlers);
