// main.jsx
import * as React from "react";
import { useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import HelmetWrapper from "./utils/HelmetProvider.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import WebDev from "./pages/WebDev.jsx";
import Branding from "./pages/Branding.jsx";
import Copywriting from "./pages/Copywriting.jsx";
import Project from "./components/Project.jsx";
import Blog from "./pages/Blog.jsx";
import Blogpost from "./pages/BlogPost.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-FZ99KTS7XE");

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ page: location.pathname });
  }, [location]);
};

// Global unhandledrejection event listener
window.addEventListener("unhandledrejection", function (event) {
  console.error("Unhandled Promise Rejection:", event.reason);
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <HelmetWrapper>
          <App />
        </HelmetWrapper>
      </ErrorBoundary>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "/webdevelopment", element: <WebDev /> },
      {
        path: "/webdevelopment/:slug",
        element: <Project contentType="webDevelopment" />,
      },
      { path: "/branding", element: <Branding /> },
      { path: "/branding/:slug", element: <Project contentType="branding" /> },
      { path: "/copywriting", element: <Copywriting /> },
      {
        path: "/copywriting/:slug",
        element: <Project contentType="editing" />,
      },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <Blogpost contentType="blogPost" /> },
      {
        path: "*",
        element: (
          <Routes>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
