import { useEffect, useState } from "react";
import "./App.css";
import PortfolioItems from "./component/PortfolioItems";

function App() {
  const [data, setData] = useState([]);

  const dataFetching = async () => {
    const response = await fetch(
      "http://localhost:1338/api/portfolios?populate=*"
    );
    const responseData = await response.json();
    setData(responseData.data);
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <div className="App">
      {data.map((entry) => (
        <PortfolioItems
          key={entry.id}
          title={entry?.attributes.title}
          description={entry?.attributes.description}
          backgroundcolor={entry?.attributes.backgroundcolor}
        />
      ))}
    </div>
  );
}

export default App;
