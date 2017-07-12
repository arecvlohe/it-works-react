import React from "react";
import { Link } from "react-router-dom";

export default function List({ funds = [] }) {
  return (
    <div>
      {funds.map(fund => {
        return (
          <div key={`${fund.Id}`}>
            <Link to={`/${fund.Id}`}>
              {fund.InvestmentName}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
