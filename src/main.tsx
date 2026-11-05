import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./app/layout";
import HomePage from "./app/page";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <HomePage />
    </RootLayout>
  </React.StrictMode>
);
