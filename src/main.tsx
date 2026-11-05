import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./app/layout";
import HomePage from "./app/page";
import ProductsPage from "./app/products/page";
import ProductDetailPage from "./app/products/[slug]/page";
import ServicesPage from "./app/services/page";
import WorkPage from "./app/work/page";
import BlogPage from "./app/blog/page";
import AboutPage from "./app/about/page";
import ContactPage from "./app/contact/page";
import CheckoutPage from "./app/checkout/page";

const path = window.location.pathname;
let Page = HomePage;
if (path.startsWith("/products/")) Page = ProductDetailPage;
else if (path.startsWith("/products")) Page = ProductsPage;
else if (path.startsWith("/services")) Page = ServicesPage;
else if (path.startsWith("/work")) Page = WorkPage;
else if (path.startsWith("/blog")) Page = BlogPage;
else if (path.startsWith("/about")) Page = AboutPage;
else if (path.startsWith("/contact")) Page = ContactPage;
else if (path.startsWith("/checkout")) Page = CheckoutPage;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <Page />
    </RootLayout>
  </React.StrictMode>
);
