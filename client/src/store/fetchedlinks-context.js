import React, { useState } from "react";

const fetchedLinksContext = React.createContext({
  fetchedLinks: [],
  isFetched: false,
  onFetched: () => {},
});

export const FetchedLinksContext = (props) => {
  const [fetchedLinks, setFetchedLinks] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const fetchHandler = (data) => {
    setFetchedLinks(data);
    setIsFetched(true);
  };
  return (
    <fetchedLinksContext.Provider
      value={{ fetchedLinks, onFetched: fetchHandler, isFetched }}
    >
      {props.children}
    </fetchedLinksContext.Provider>
  );
};

export default fetchedLinksContext;
