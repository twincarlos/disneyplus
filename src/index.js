import "./index.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Splash from "./components/Splash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);