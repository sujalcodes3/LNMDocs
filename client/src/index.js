import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UploadFinal from "./pages/uploadAndFindAnswers";
import { ThemeProvider } from "@material-tailwind/react";
import { LoadingContextProvider } from "./store/loading-context";
import { FetchedLinksContext } from "./store/fetchedlinks-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UploadAndFindAnswers from "./pages/uploadAndFindAnswers";

const router = createBrowserRouter([
  {
    path: "/raju",
    element: <div>Hello world!</div>,
  },
  {
    path: "/bheem",
    element: <UploadAndFindAnswers />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <LoadingContextProvider>
    <FetchedLinksContext>
      <ThemeProvider>
        <RouterProvider router={router} />
        {/* <UploadFinal /> */}
      </ThemeProvider>
    </FetchedLinksContext>
  </LoadingContextProvider>
  // {/* </React.StrictMode> */}
);
