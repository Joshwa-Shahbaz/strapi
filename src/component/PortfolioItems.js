import React from "react";

const PortfolioItems = (props) => {
  return (
    <div
      className="portfolioItem"
      style={{ background: props.backgroundcolor }}
    >
      <div className="portfolioItem-textbox">
        <h1>{props.title}</h1>
        <h2 style={{ width: "300px" }}>{props.description}</h2>
      </div>
    </div>
  );
};

export default PortfolioItems;
