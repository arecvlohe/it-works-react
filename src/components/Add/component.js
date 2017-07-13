import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import styled from "styled-components";

function Add({
  className,
  handleChange,
  handleSubmit,
  InvestmentName,
  Agency,
  Subagency,
  BriefDescription,
  YearEstablished,
  FundingFY2008,
  FundingFY2009,
  FundingFY2010,
  MissionSpecificOrGeneralStem,
  AgencyOrMissionRelatedNeeds,
  PrimaryInvestmentObjective
}) {
  return (
    <div className={className}>
      <Row>
        <Col md={6}>
          <h2>Add Investment Fund</h2>
          <form onSubmit={handleSubmit}>
            <small>
              <span className="required">*</span> required field
            </small>
            <div className="form-group">
              <label htmlFor="InvestmentName">
                Investment Name<span className="required">*</span>
              </label>
              <input
                id="InvestmentName"
                className="form-control"
                name="InvestmentName"
                value={InvestmentName}
                onChange={handleChange}
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="YearEstablished">
                Year Established<span className="required">*</span>
              </label>
              <input
                className="form-control"
                id="YearEstablished"
                name="YearEstablished"
                value={YearEstablished}
                onChange={handleChange}
                min="1900"
                max="2017"
                type="number"
                placeholder="ex. 2008"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Agency">
                Agency Name<span className="required">*</span>
              </label>
              <input
                className="form-control"
                id="Agency"
                name="Agency"
                value={Agency}
                onChange={handleChange}
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Subagency">Subagency Name</label>
              <input
                id="Subagency"
                className="form-control"
                name="Subagency"
                value={Subagency}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="BriefDescription">
                Brief Description of Fund
              </label>
              <textarea
                id="BriefDescription"
                className="form-control"
                name="BriefDescription"
                value={BriefDescription}
                onChange={handleChange}
                type="textarea"
              />
            </div>
            <div className="form-group">
              <label htmlFor="PrimaryInvestmentObjective">
                Primary Investment Objective
              </label>
              <textarea
                id="PrimaryInvestmentObjective"
                className="form-control"
                name="PrimaryInvestmentObjective"
                value={PrimaryInvestmentObjective}
                onChange={handleChange}
                type="textarea"
              />
            </div>
            <div className="form-group">
              <label htmlFor="AgencyOrMissionRelatedNeeds">
                Agency or Mission Related Needs
              </label>
              <textarea
                className="form-control"
                id="AgencyOrMissionRelatedNeeds"
                name="AgencyOrMissionRelatedNeeds"
                value={AgencyOrMissionRelatedNeeds}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="MissionSpecificOrGeneralStem">
                Mission Specific or General STEM
              </label>
              <input
                id="MissionSpecificOrGeneralStem"
                className="form-control"
                name="MissionSpecificOrGeneralStem"
                value={MissionSpecificOrGeneralStem}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="FundingFY2008">
                Funding for Fiscal Year 2008
              </label>
              <input
                className="form-control"
                id="FundingFY2008"
                name="FundingFY2008"
                value={FundingFY2008}
                onChange={handleChange}
                type="number"
                step="0.01"
                placeholder="ex. 10 or 10.1 or 10.11"
              />
            </div>
            <div className="form-group">
              <label htmlFor="FundingFY2009">
                Funding for Fiscal Year 2009
              </label>
              <input
                id="FundingFY2009"
                className="form-control"
                name="FundingFY2009"
                value={FundingFY2009}
                onChange={handleChange}
                type="number"
                step="0.01"
                placeholder="ex. 10 or 10.1 or 10.11"
              />
            </div>
            <div className="form-group">
              <label htmlFor="FundingFy2010">
                Funding for Fiscal Year 2010
              </label>
              <input
                id="FundingFY2010"
                className="form-control"
                name="FundingFY2010"
                value={FundingFY2010}
                onChange={handleChange}
                type="number"
                step="0.01"
                placeholder="ex. 10 or 10.1 or 10.11"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Fund
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default styled(Add)`
  padding-bottom: 20px;
  .required {
    color: red;
  }
`;
