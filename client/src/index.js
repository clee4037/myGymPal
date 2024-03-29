import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Log from "./containers/Log.jsx";
import NewWorkout from "./containers/NewWorkout.jsx";
import Routines from "./containers/Routines.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Log />,
        children: [
          {
            path: "/calendar",
            element: <Log />,
          },
        ],
      },
      {
        path: "/workout",
        element: <NewWorkout />,
      },
      {
        path: "/routine",
        element: <Routines />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/stats",
      //   element: <Stats />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
