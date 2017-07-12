import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { showNotificationRequest } from "../../store/actions";

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fund: {}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      const { match: { params: { id } } } = this.props;
      axios.get(API + `/${id}`).then(({ data }) => {
        this.setState(data);
      });
    }

    handleSubmit(e) {
      const { match: { params: { id } }, dispatch, history } = this.props;
      e.preventDefault();
      axios
        .put(API + `/${id}`, this.state)
        .then(res => {
          if (res.status === 200) {
            history.push("/");
            dispatch(showNotificationRequest(id));
          }
        })
        .catch(e => {
          // Swallow Error :(
          console.log(e);
        });
    }

    handleChange({ target: { name, value } }) {
      this.setState({ [name]: value });
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

export default compose(connect(), withRouter, handlers);
