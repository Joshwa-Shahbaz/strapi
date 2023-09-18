import React from "react";

const Article = ({ data }) => {
  const { title, link } = data;

  return (
    <div className="quote" style={{ backgroundColor: "#FF9B50" }}>
      <div className="center">
        <h1>section 2</h1>
        <a href={link} target="_blank">
          <h1>{title}</h1>
        </a>
      </div>
    </div>
  );
};

export default Article;
