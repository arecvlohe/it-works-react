import React from "react";
import { Link } from "react-router-dom";

export default function Detail({ fund = {} }) {
  return (
    <div>
      <Link to={`/update/${fund.Id}`}>Update Investment Name</Link>
      <div>
        {fund.YearEstablished}
      </div>
      <div>
        {fund.InvestmentName}
      </div>
      <div>
        {fund.Agency}
      </div>
      <div>
        {fund.SubAgency}
      </div>
      <div>
        {fund.PrimaryInvestmentObjective}
      </div>
      <div>
        {fund.BriefDescription}
      </div>
      <div>
        <div>
          {fund.FundingFY2008}
          <br />
          {fund.FundingFY2009}
          <br />
          {fund.FundingFY2010}
        </div>
      </div>
      <div>
        {fund.MissionSpecificOrGeneralStem}
      </div>
      <div>
        {fund.AgencyOrMissionRelatedNeeds}
      </div>
    </div>
  );
}
