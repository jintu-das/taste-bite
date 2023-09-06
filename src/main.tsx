import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            blanditiis. Eligendi quae nihil nesciunt magni laborum corporis!
            Aperiam tempora sit, ipsa consectetur cum deserunt eum magnam
            laboriosam tenetur. Inventore, deserunt?
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
