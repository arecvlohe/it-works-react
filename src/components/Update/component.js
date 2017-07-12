import React from "react";

export default function Update({ handleSubmit, InvestmentName, handleChange }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="InvestmentName"
          type="text"
          value={InvestmentName}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
