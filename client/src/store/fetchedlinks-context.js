import React, { useState } from "react";

const fetchedLinksContext = React.createContext();

export const FetchedLinksContext = (props) => {
  const [fetchedLinks, setFetchedLinks] = useState(null);
  const fetchHandler = (data) => {
    setFetchedLinks(data);
  };
  return (
    <fetchedLinksContext.Provider
      value={{ fetchedLinks, onFetched: fetchHandler }}
    >
      {props.children}
    </fetchedLinksContext.Provider>
  );
};

export default fetchedLinksContext;
