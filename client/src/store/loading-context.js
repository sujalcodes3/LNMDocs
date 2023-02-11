import React, { useState } from "react";

const LoadingContext = React.createContext({
  isLoading: true,
  loader: false,
  onLoaded: () => {},
  onLoading: () => {},
});

export const LoadingContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  const loadedHandler = () => {
    setIsLoading(false);
  };
  const loadingHandler = () => {
    setIsLoading(true);
  };
  const loaderOnHandler = () => {
    setLoader(true);
  };
  const loaderOffHandler = () => {
    setLoader(false);
  };
  return (
    <LoadingContext.Provider
      value={{
        isLoading: isLoading,
        loader: loader,
        onLoaded: loadedHandler,
        onLoading: loadingHandler,
        loaderOn: loaderOnHandler,
        loaderOff: loaderOffHandler,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
