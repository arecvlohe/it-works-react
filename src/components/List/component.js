import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function List({ funds = [], className }) {
  return (
    <div className={className}>
      <div className="list-group">
        {funds.map(fund => {
          return (
            <button type="button" className="list-group-item" key={fund.Id}>
              <Link to={`/${fund.Id}`}>
                {fund.InvestmentName}
              </Link>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default styled(List)`
  a {
    &:hover, &:active, &:focus, &:visited {
      text-decoration: none;
    }
  }
`;
