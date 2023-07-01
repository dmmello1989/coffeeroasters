import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css";

import Home from "./routes/home";
import About from './routes/about';
import Plan from "./routes/plan";
import ErrorPage from './routes/error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about-us",
    element: <About />
  },
  {
    path: "create-your-plan",
    element: <Plan />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
