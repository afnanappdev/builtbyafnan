
"use client";

import React from "react";
const Link = ({ href, children, ...props }: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} {...props}>{children}</a>
);
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  Code2,
  ShoppingBag,
  LayoutDashboard,
  LockKeyhole,
  X,
  Check,
} from "lucide-react";

type Category = "All" | "Starter Kits" | "App Templates" | "UI Kits";

type Product = {
  id: number;
  slug: string;
  name: string;
  category: Exclude<Category, "All">;
  technology: string[];
  description: string;
  price: number;
  badge?: string;
  featured: boolean;
  icon: typeof Code2;
  theme: string;
  iconColor: string;
  features: string[];
};

const products: Product[] = [
  {
    id: 1,
    slug: "fintech-starter-kit",
    name: "FinTech Starter Kit",
    category: "Starter Kits",
    technology: ["Flutter", "Firebase"],
    description:
      "Wallet, transfers and spending insights, ready to brand and launch.",
    price: 79,
    badge: "Popular",
    featured: true,
    icon: Code2,
    theme: "bg-emerald-50",
    iconColor: "text-emerald-700",
    features: ["Wallet UI", "Transactions", "Spending insights"],
  },
  {
    id: 2,
    slug: "ecommerce-app-template",
    name: "E-commerce App Template",
    category: "App Templates",
    technology: ["Flutter", "REST API"],
    description:
      "Catalog, cart and checkout screens with a clean, scalable structure.",
    price: 99,
    badge: "App template",
    featured: true,
    icon: ShoppingBag,
    theme: "bg-orange-50",
    iconColor: "text-orange-700",
    features: ["Product catalog", "Shopping cart", "Checkout UI"],
  },
  {
    id: 3,
    slug: "admin-dashboard-ui-kit",
    name: "Admin Dashboard UI Kit",
    category: "UI Kits",
    technology: ["Flutter Web"],
    description:
      "Charts, tables and forms for internal tools and back offices.",
    price: 49,
    badge: "UI kit",
    featured: true,
    icon: LayoutDashboard,
    theme: "bg-blue-50",
    iconColor: "text-blue-700",
    features: ["Dashboard widgets", "Data tables", "Forms"],
  },
  {
    id: 4,
    slug: "auth-onboarding-pack",
    name: "Auth & Onboarding Pack",
    category: "Starter Kits",
    technology: ["Flutter", "Firebase Auth"],
    description:
      "Login, sign-up and onboarding flows you can drop into any app.",
    price: 29,
    badge: "Starter kit",
    featured: false,
    icon: LockKeyhole,
    theme: "bg-violet-50",
    iconColor: "text-violet-700",
    features: ["Login screens", "Sign-up flow", "Onboarding"],
  },
];

const categories: Category[] = [
  "All",
  "Starter Kits",
  "App Templates",
  "UI Kits",
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to high", value: "low" },
  { label: "Price: High to low", value: "high" },
  { label: "Name: A to Z", value: "name" },
];

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/60">
      {/* Product preview */}
      <Link
        href={`/products/${product.slug}`}
        className={`relative flex h-60 items-center justify-center overflow-hidden ${product.theme}`}
        aria-label={`View ${product.name}`}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-current opacity-20" />
          <div className="absolute bottom-5 right-8 h-32 w-32 rounded-full border border-current opacity-20" />
        </div>

        <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-white bg-white shadow-xl shadow-neutral-900/10 transition-transform duration-300 group-hover:scale-110">
          <Icon size={48} strokeWidth={1.4} className={product.iconColor} />
        </div>

        {product.badge && (
          <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-700">
            {product.badge}
          </span>
        )}

        <span className="absolute bottom-5 right-5 rounded-full bg-white/90 p-2 text-neutral-700 opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      {/* Product information */}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-emerald-700">
            {product.category}
          </span>
          <span className="text-neutral-300">·</span>
          <span className="text-xs text-neutral-400">
            {product.technology.join(" · ")}
          </span>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950 transition group-hover:text-emerald-800">
            {product.name}
          </h2>
        </Link>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-neutral-500">
          {product.description}
        </p>

        <div className="mt-5 space-y-2 border-t border-neutral-100 pt-5">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs text-neutral-500"
            >
              <Check size={13} className="text-emerald-700" />
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral-400">Starting at</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">
              ${product.price}
            </p>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-emerald-800"
          >
            View product <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchText =
        `${product.name} ${product.description} ${product.technology.join(" ")} ${product.category}`.toLowerCase();

      const matchesSearch = searchText.includes(
        searchQuery.toLowerCase().trim()
      );

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else {
      result = [...result].sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* Page introduction */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              The product library
            </div>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-6xl">
              Start with code
              <span className="text-emerald-700"> that already works.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-500">
              Production-ready Flutter starter kits, app templates and UI
              kits. Skip repetitive development and focus on building
              something great.
            </p>

            <div className="mt-9 flex flex-wrap gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-emerald-700" />
                Clean code structure
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-emerald-700" />
                Developer-friendly
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-emerald-700" />
                Clear licensing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product library */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
        {/* Search and count */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Explore products
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Find the right foundation for your next project.
            </p>
          </div>

          <p className="text-sm text-neutral-500">
            <span className="font-semibold text-neutral-950">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"} available
          </p>
        </div>

        {/* Search bar */}
        <div className="mt-9 flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Flutter products..."
              aria-label="Search products"
              className="h-14 w-full rounded-2xl border border-neutral-200 bg-white pl-14 pr-12 text-sm outline-none transition placeholder:text-neutral-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-950"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Sorting */}
          <div className="relative lg:w-64">
            <SlidersHorizontal
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products"
              className="h-14 w-full appearance-none rounded-2xl border border-neutral-200 bg-white pl-11 pr-5 text-sm outline-none transition focus:border-emerald-700"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-neutral-100 pb-6">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-neutral-950 text-white"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-950 hover:text-neutral-950"
                }`}
              >
                {category}
                {category === "All" && (
                  <span className="ml-2 text-xs opacity-60">
                    {products.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active filters */}
        {(activeCategory !== "All" || searchQuery) && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-neutral-500">
              Showing results for{" "}
              <span className="font-medium text-neutral-950">
                {activeCategory !== "All" ? activeCategory : "All categories"}
              </span>
              {searchQuery && (
                <>
                  {" "}
                  matching{" "}
                  <span className="font-medium text-neutral-950">
                    "{searchQuery}"
                  </span>
                </>
              )}
            </p>

            <button
              onClick={clearFilters}
              className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-dashed border-neutral-300 px-6 py-20 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
              <Search size={24} className="text-neutral-400" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">
              No products found
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Try another search term or choose a different category.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Custom development CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="flex flex-col justify-between gap-8 rounded-[32px] bg-neutral-950 px-8 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:py-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Need something different?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Can't find what you're looking for?
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Tell me about your idea. I can build a custom Flutter
              application around your requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-300"
          >
            Discuss your project <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
