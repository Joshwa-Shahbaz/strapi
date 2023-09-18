import React from "react";

const Entry = ({ data }) => {
  const { backgroundcolor, link, title } = data;

  return (
    <div className="quote" style={{ backgroundColor: backgroundcolor }}>
      <div className="center">
        <h1>section 3</h1>
        <a href={link} target="_blank">
          <h1>{title}</h1>
        </a>
      </div>
    </div>
  );
};

export default Entry;
