// eslint-disable-next-line
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import WebDev from './pages/WebDev.jsx';
import Branding from './pages/Branding.jsx';
import Copywriting from './pages/Copywriting.jsx';
import Project from './components/Project.jsx';

// Global unhandledrejection event listener
window.addEventListener('unhandledrejection', function (event) {
  console.error('Unhandled Promise Rejection:', event.reason);
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <App />
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/webdevelopment',
        element: <WebDev />,
      },
      {
        path: "/webdevelopment/:slug",
        element: <Project contentType="webDevelopment" />,
      },
      {
        path: '/branding',
        element: <Branding />,
      },
      {
        path: "/branding/:slug",
        element: <Project contentType="branding" />,
      },
      {
        path: '/copywriting',
        element: <Copywriting />,
      },
      {
        path: "/copywriting/:slug",
        element: <Project contentType="editing" />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider forceRefresh={true} router={router} />
  // </React.StrictMode>
);
