import React, { useState } from "react";

const LoadingContext = React.createContext({
  isLoading: true,
  loader: false,
  subjectsFetched: false,
  onLoaded: () => {},
  onLoading: () => {},
});

export const LoadingContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [subjectsFetched, setSubjectsFetched] = useState(false);

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
  const fetchingSubjects = () => {
    setSubjectsFetched(false);
  };
  const fetchedSubjects = () => {
    setSubjectsFetched(true);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading: isLoading,
        loader: loader,
        subjectsFetched: subjectsFetched,
        onLoaded: loadedHandler,
        onLoading: loadingHandler,
        loaderOn: loaderOnHandler,
        loaderOff: loaderOffHandler,
        subjectsNotHere: fetchingSubjects,
        subjectsAreHere: fetchedSubjects,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
