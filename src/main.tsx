import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { Suspense, lazy } from "react";

const Homepage= lazy(() =>
  wait(1300).then(() => import("./screens/homepage/homepage.tsx"))
);
const Table= lazy(() =>
  wait(1300).then(() => import("./screens/react table/reactTable.tsx"))
);

const router = createBrowserRouter([

  {
    path: "/Haniiwaakusu",
    element: <Navigate to="/Haniiwaakusu/homepage" />,
  },
  
  {
    path: "/Haniiwaakusu/homepage",
    element:  <>
    <Suspense >
      <Homepage />
    </Suspense>
  </>,
  },
  
  {
    path: "/Haniiwaakusu/table",
    element:  <>
    <Suspense >
      <Table />
    </Suspense>
  </>,
  }
  


]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
