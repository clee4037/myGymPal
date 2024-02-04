import * as React from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Log from "./containers/Log";
import NewWorkout from "./containers/NewWorkout";
import Routines from "./containers/Routines";

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
