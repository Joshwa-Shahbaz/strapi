import { useEffect, useState } from "react";
import "./App.css";
import Article from "./component/Article";
import Entry from "./component/Entry";
import Quotes from "./component/Quotes";
import ComplexEntry from "./component/ComplexEntry";
import React from "react";

function App() {
  const [data, setData] = useState([]);

  const dataFetching = async () => {
    try {
      const response = await fetch(
        "http://localhost:1338/api/pages?populate=*"
      );
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.data);
      } else {
        console.error(
          "Error fetching data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <div className="App">
      {data[0]?.attributes?.content?.map((component) => (
        <React.Fragment key={component.id}>
          {component.__component === "page.quote" && (
            <Quotes data={component} />
          )}
          {component.__component === "page.article" && (
            <Article data={component} />
          )}
          {component.__component === "page.entry" && <Entry data={component} />}
          {component.__component === "page.complex-entry" && (
            <ComplexEntry data={component} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
