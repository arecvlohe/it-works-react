import React from "react";

export default function Detail({ fund = {} }) {
  return (
    <div>
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
    </div>
  );
}
