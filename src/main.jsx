import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "./components/Root/Root.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Mobiles } from "./components/Mobiles/Mobiles.jsx";
import { Laptops } from "./components/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptop", Component: Laptops },
    ],
  },
  {
    path: "/about",
    element: <h1>About Me</h1>,
  },
  {
    path: "blogs",
    element: <h4>all blogs here</h4>,
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
