import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Info from "./components/Info/Info.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Home from "./components/Home/Home.tsx";
import CBTTools from "./components/ProjectPages/CBTTools.tsx";
import Overview from "./components/ProjectPages/Overview.tsx";
import VisionUI from "./components/ProjectPages/VisionUI.tsx";
import RevitPlugin from "./components/ProjectPages/RevitPlugin.tsx";
import BackendArchitecture from "./components/ProjectPages/BackendArchitecture.tsx";

const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
  window.history.replaceState(null, "", redirect);
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/cbt-tools",
        element: <CBTTools />,
        children: [
          { index: true, element: <Overview /> },
          { path: "visionUI", element: <VisionUI /> },
          { path: "revitPlugin", element: <RevitPlugin /> },
          { path: "backendArch", element: <BackendArchitecture /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
