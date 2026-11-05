"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  LockKeyhole,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
};

type Props = {
  product: Product;
  initialLicense: "personal" | "commercial";
  initialTotal: number;
};

export default function CheckoutForm({
  product,
  initialLicense,
  initialTotal,
}: Props) {
  const [license, setLicense] = useState(initialLicense);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Pakistan");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState("");

  const total =
    license === "commercial" ? product.price * 2 : product.price;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!name.trim() || !email.trim() || !country.trim()) {
      setMessage("Please complete all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!acceptedTerms) {
      setMessage("Please accept the terms to continue.");
      return;
    }

    // Payment integration will be added in the next stage.
    setMessage(
      "Your checkout details are ready. Payment processing has not been connected yet."
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]"
    >
      {/* Customer details */}
      <div className="space-y-6">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
              <ShoppingBag size={21} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Customer information</h2>
              <p className="mt-1 text-sm text-gray-500">
                Where should we send your order details?
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />

              <p className="mt-2 text-xs text-gray-400">
                Your product access details will be sent to this email.
              </p>
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium"
              >
                Country
              </label>

              <select
                id="country"
                autoComplete="country-name"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </section>

        {/* License */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Choose your license</h2>

          <p className="mt-2 text-sm text-gray-500">
            Select how you intend to use this product.
          </p>

          <div className="mt-6 space-y-3">
            <label
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                license === "personal"
                  ? "border-emerald-600 bg-emerald-50/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="license"
                  value="personal"
                  checked={license === "personal"}
                  onChange={() => setLicense("personal")}
                  className="h-4 w-4 accent-emerald-700"
                />

                <div>
                  <p className="font-semibold">Personal License</p>
                  <p className="mt-1 text-xs text-gray-500">
                    For your own projects
                  </p>
                </div>
              </div>

              <span className="font-bold">${product.price}</span>
            </label>

            <label
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                license === "commercial"
                  ? "border-emerald-600 bg-emerald-50/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="license"
                  value="commercial"
                  checked={license === "commercial"}
                  onChange={() => setLicense("commercial")}
                  className="h-4 w-4 accent-emerald-700"
                />

                <div>
                  <p className="font-semibold">Commercial License</p>
                  <p className="mt-1 text-xs text-gray-500">
                    For client or commercial projects
                  </p>
                </div>
              </div>

              <span className="font-bold">${product.price * 2}</span>
            </label>
          </div>
        </section>

        {/* Terms */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 h-4 w-4 accent-emerald-700"
            />

            <span className="text-sm leading-6 text-gray-600">
              I agree to the{" "}
              <Link
                href="/licenses"
                target="_blank"
                className="font-medium text-emerald-700 underline"
              >
                license terms
              </Link>{" "}
              and applicable terms of service.
            </span>
          </label>
        </section>
      </div>

      {/* Order summary */}
      <aside>
        <div className="sticky top-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Order summary</h2>

          <div className="mt-7 rounded-xl bg-[#F6F8F7] p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <ShoppingBag size={22} />
            </div>

            <p className="font-semibold">{product.name}</p>
            <p className="mt-1 text-sm text-gray-500">
              {product.category}
            </p>
          </div>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-gray-500">Product</span>
              <span className="font-medium">${product.price.toFixed(2)}</span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-gray-500">
                {license === "personal"
                  ? "Personal license"
                  : "Commercial license"}
              </span>

              <span className="font-medium">
                {license === "personal"
                  ? "Included"
                  : `$${product.price.toFixed(2)}`}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>

                <span className="text-2xl font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                USD. Any applicable taxes will be calculated during payment.
              </p>
            </div>
          </div>

          {message && (
            <div
              role="status"
              className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-4 font-semibold text-white transition hover:bg-emerald-800"
          >
            Continue to payment
            <ArrowRight size={18} />
          </button>

          <div className="mt-5 space-y-3 text-xs text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <LockKeyhole size={14} />
              Secure checkout experience
            </div>

            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={14} />
              Digital product delivery
            </div>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="mt-7 flex items-center justify-center gap-2 text-sm text-gray-500 transition hover:text-emerald-700"
          >
            <ArrowLeft size={15} />
            Back to product
          </Link>
        </div>
      </aside>
    </form>
  );
}