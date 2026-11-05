import React from "react";

const Link = ({ href, children, ...props }: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} {...props}>{children}</a>
);
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import ProductPurchase from "../../../components/products/product-purchase";

const products = {
  "fintech-starter-kit": {
    name: "FinTech Starter Kit",
    category: "Starter Kit",
    price: 79,
    description:
      "A modern Flutter starter kit for building finance and wallet applications. Start with a clean foundation instead of building every screen from scratch.",
    technologies: ["Flutter", "Firebase", "Dart"],
    features: [
      "Modern dashboard UI",
      "Wallet balance and cards",
      "Transaction history",
      "Spending insights",
      "Reusable UI components",
      "Organized Flutter architecture",
    ],
    includes: [
      "Complete Flutter source code",
      "Setup documentation",
      "Reusable components",
      "Future updates",
    ],
  },

  "ecommerce-app-template": {
    name: "E-commerce App Template",
    category: "App Template",
    price: 99,
    description:
      "A complete starting point for creating a modern shopping application with product listings, shopping cart, and customer-friendly screens.",
    technologies: ["Flutter", "REST API", "Dart"],
    features: [
      "Product listing and details",
      "Shopping cart UI",
      "Category browsing",
      "User profile screens",
      "Order interface",
      "Responsive layouts",
    ],
    includes: [
      "Complete Flutter source code",
      "Setup documentation",
      "Reusable components",
      "Future updates",
    ],
  },

  "admin-dashboard-ui-kit": {
    name: "Admin Dashboard UI Kit",
    category: "UI Kit",
    price: 49,
    description:
      "A clean dashboard UI kit for Flutter Web projects. Build professional admin interfaces using reusable layouts and components.",
    technologies: ["Flutter Web", "Dart"],
    features: [
      "Dashboard overview",
      "Statistics cards",
      "Data tables",
      "Navigation sidebar",
      "Charts and analytics layouts",
      "Responsive design",
    ],
    includes: [
      "Complete source code",
      "Setup documentation",
      "Reusable UI components",
      "Future updates",
    ],
  },

  "auth-onboarding-pack": {
    name: "Auth & Onboarding Pack",
    category: "Starter Kit",
    price: 29,
    description:
      "A reusable authentication and onboarding starter pack for Flutter applications. Give your app a professional first impression.",
    technologies: ["Flutter", "Firebase Auth", "Dart"],
    features: [
      "Welcome screens",
      "Login and registration UI",
      "Password recovery",
      "Form validation UI",
      "Authentication flow structure",
      "Reusable components",
    ],
    includes: [
      "Complete source code",
      "Setup documentation",
      "Reusable components",
      "Future updates",
    ],
  },
};

type ProductSlug = keyof typeof products;

export default function ProductDetailPage() {
  const slug = window.location.pathname.split("/").pop() || "";

  if (!(slug in products)) {
    return <div className="p-10">Not found</div>;
  }

  const product = products[slug as ProductSlug];

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-emerald-700"
        >
          <ArrowLeft size={16} />
          Back to products
        </Link>
      </div>

      {/* Product hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-2 lg:items-center">
        {/* Preview */}
        <div className="flex min-h-[360px] items-center justify-center rounded-3xl border border-gray-200 bg-[#F5F7F6] p-8">
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">PRODUCT PREVIEW</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {product.name}
                </h3>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Smartphone size={24} />
              </div>
            </div>

            <div className="mb-5 rounded-xl bg-[#F3F6F4] p-5">
              <p className="text-sm text-gray-500">Dashboard overview</p>
              <div className="mt-3 h-8 w-2/3 rounded-md bg-gray-200" />
              <div className="mt-2 h-3 w-1/2 rounded-md bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-100 p-4">
                <div className="mb-3 h-8 w-8 rounded-lg bg-emerald-100" />
                <div className="h-3 w-3/4 rounded bg-gray-200" />
              </div>
              <div className="rounded-xl border border-gray-100 p-4">
                <div className="mb-3 h-8 w-8 rounded-lg bg-blue-100" />
                <div className="h-3 w-3/4 rounded bg-gray-200" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="h-3 w-full rounded bg-gray-100" />
              <div className="h-3 w-4/5 rounded bg-gray-100" />
              <div className="h-3 w-3/5 rounded bg-gray-100" />
            </div>
          </div>
        </div>

        {/* Product information */}
        <div>
          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            {product.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {product.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <ProductPurchase
              slug={slug}
              name={product.name}
              price={product.price}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} />
              Source code included
            </span>
            <span className="flex items-center gap-2">
              <Zap size={17} />
              Instant access after purchase
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 bg-[#FAFBFA]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              What's included
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Everything you need to get started.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Save development time with ready-made screens, reusable
              components, and a structured project foundation.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-1 text-emerald-700">
                  <Check size={16} />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Files included */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <Code2 className="text-emerald-700" size={26} />
          <h2 className="text-3xl font-bold">What you'll receive</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.includes.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <Check className="mb-4 text-emerald-700" size={22} />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#102B25] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="text-3xl font-bold">
              Ready to start building?
            </h2>
            <p className="mt-3 text-gray-300">
              Get the source code and start your next project.
            </p>
          </div>

          <Link
            href={`/checkout?product=${slug}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#102B25] transition hover:bg-emerald-100"
          >
            Get this product
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}