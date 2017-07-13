import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import styled from "styled-components";

function Detail({ fund = {}, className }) {
  return (
    <div className={className}>
      <h2>Fund Details</h2>
      <Table striped condensed hover bordered>
        <tbody>
          <tr>
            <td>Fund Name</td>
            <td>
              {fund.InvestmentName}
            </td>
          </tr>
          <tr>
            <td>Year Established</td>
            <td>
              {fund.YearEstablished}
            </td>
          </tr>
          <tr>
            <td>Agency</td>
            <td>
              {fund.Agency}
            </td>
          </tr>
          <tr>
            <td>SubAgency</td>
            <td>
              {fund.SubAgency}
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              {fund.BriefDescription}
            </td>
          </tr>
          <tr>
            <td>Investment Objective</td>
            <td>
              {fund.PrimaryInvestmentObjective}
            </td>
          </tr>
          <tr>
            <td>Mission Specific or STEM</td>
            <td>
              {fund.MissionSpecificOrGeneralStem}
            </td>
          </tr>
          <tr>
            <td>Mission Needs</td>
            <td>
              {fund.AgencyOrMissionRelatedNeeds}
            </td>
          </tr>
          <tr>
            <td>FY 2008</td>
            <td>
              {fund.FundingFY2008}
            </td>
          </tr>
          <tr>
            <td>FY 2009</td>
            <td>
              {fund.FundingFY2009}
            </td>
          </tr>
          <tr>
            <td>FY 2010</td>
            <td>
              {fund.FundingFY2010}
            </td>
          </tr>
        </tbody>
      </Table>
      <Link to={`/update/${fund.Id}`} className="btn btn-primary">
        Update Investment Name
      </Link>
    </div>
  );
}

export default styled(Detail)`
  padding-bottom: 20px;
`;
