import React, { Component } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import axios from "axios";

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target: { name, value } }) {
      this.setState({ [name]: value });
    }

    handleSubmit(e) {
      e.preventDefault();
      axios
        .post(API, this.state)
        .then(res => {
          if (res.status === 201) {
            this.props.history.push("/");
          }
        })
        .catch(e => {
          console.log(e);
        });
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
}

export default compose(handlers, withRouter);
