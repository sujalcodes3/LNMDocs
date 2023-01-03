import React, { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState({});

  const fetchData = () => {
    fetch("http://localhost:8080/data/getData")
      .then((resData) => {
        return resData.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>Hello World</>;
}

export default App;
