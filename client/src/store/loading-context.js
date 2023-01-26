import React, { useState } from "react";

const LoadingContext = React.createContext({
  isLoading: true,
  onLoaded: () => {},
  onLoading: () => {},
});

export const LoadingContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadedHandler = () => {
    setIsLoading(false);
  };
  const loadingHandler = () => {
    setIsLoading(true);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading: isLoading,
        onLoaded: loadedHandler,
        onLoading: loadingHandler,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
