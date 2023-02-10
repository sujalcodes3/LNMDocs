import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { LoadingContextProvider } from "./store/loading-context";
import { FetchedLinksContext } from "./store/fetchedlinks-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <LoadingContextProvider>
    <FetchedLinksContext>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FetchedLinksContext>
  </LoadingContextProvider>
  // {/* </React.StrictMode> */}
);
