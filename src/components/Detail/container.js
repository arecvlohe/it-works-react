import React, { Component } from "react";
import { compose } from "recompose";
import axios from "axios";

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fund: {}
      };
    }

    componentDidMount() {
      const { match: { params: { id } } } = this.props;
      axios.get(API + `/${id}`).then(({ data }) => {
        this.setState({ fund: data });
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}

export default compose(handlers);
