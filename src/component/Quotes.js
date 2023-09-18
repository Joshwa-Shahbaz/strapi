import React from "react";

const Quotes = ({ data }) => {
  console.log(data);
  const { big_text, author, backgroundcolor } = data;

  console.log(data);

  return (
    <>
      <div className="quote" style={{ backgroundColor: backgroundcolor }}>
        <div className="center">
          <h1>section 1</h1>
          <h1>{big_text}</h1>
          <h2>{author}</h2>
        </div>
      </div>
    </>
  );
};

export default Quotes;
