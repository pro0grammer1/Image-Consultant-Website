import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Layout = React.lazy(() => import("./components/Layout/layout.jsx"))
const Home = React.lazy(() => import('./web_pages/Home/home.jsx'))
const About = React.lazy(() => import('./web_pages/About/about.jsx'))
const NotFound = React.lazy(() => import("./components/NotFound/404.jsx"));
import './index.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "*", element: <NotFound /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);