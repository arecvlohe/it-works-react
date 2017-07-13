import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Update({ handleSubmit, InvestmentName, handleChange }) {
  return (
    <div>
      <h2>Update Investment Name</h2>
      <Row>
        <Col md={8}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="InvestmentName">Investment Name</label>
              <input
                id="InvestmentName"
                className="form-control"
                name="InvestmentName"
                type="text"
                value={InvestmentName}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
