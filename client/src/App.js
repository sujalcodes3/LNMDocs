import React, { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState({});

  const fetchData = () => {
    fetch("http://localhost:8080/data/getData")
      .then(resData => {
        setApiData(resData);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <>{apiData}</>;
}

export default App;
