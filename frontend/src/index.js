import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./contributor/Home.tsx";
import Donate from "./contributor/donate.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connectors from "./contributor/connector.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "donate",
    element: (
      <Connectors>
        <Donate />
      </Connectors>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
