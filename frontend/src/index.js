import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./contributor/Home.tsx";
import Donate from "./contributor/donate.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connectors from "./contributor/connector.tsx";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "donate/:id",
    element: (
      <Donate />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Connectors>
      <RouterProvider router={router} />
    </Connectors>
  </React.StrictMode>
);
