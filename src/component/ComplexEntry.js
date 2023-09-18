import React from "react";

const ComplexEntry = ({ data }) => {
  const { subtitle, text_position, title } = data;

  return (
    <div className="quote" style={{ backgroundColor: "blue" }}>
      <div className="center">
        <h1>section 4</h1>
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
      </div>
    </div>
  );
};

export default ComplexEntry;
