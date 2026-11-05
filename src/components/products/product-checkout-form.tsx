"use client";

import { useState } from "react";
import { CheckCircle2, LockKeyhole } from "lucide-react";

type License = "personal" | "commercial";

type Props = {
  slug: string;
  productName: string;
  basePrice: number;
  initialLicense: License;
};

export default function ProductCheckoutForm({
  slug,
  productName,
  basePrice,
  initialLicense,
}: Props) {
  const [license, setLicense] = useState<License>(initialLicense);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState("");

  const total = license === "commercial" ? basePrice * 2 : basePrice;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!acceptedTerms) {
      setMessage("Please accept the terms before continuing.");
      return;
    }

    // Payment processing will be connected in a later step.
    setMessage(
      "Your checkout form is ready. Payment processing has not been connected yet."
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Customer details */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Customer information</h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter the details for your order and download access.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
              Full name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your full name"
              autoComplete="name"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
            <p className="mt-2 text-xs text-gray-400">
              Your product access details will be sent to this email after a
              successful order.
            </p>
          </div>

          <div>
            <label htmlFor="country" className="mb-2 block text-sm font-medium">
              Country *
            </label>
            <select
              id="country"
              name="country"
              required
              defaultValue=""
              autoComplete="country-name"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-emerald-600"
            >
              <option value="" disabled>
                Select country
              </option>
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="United Arab Emirates">
                United Arab Emirates
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium">
              City *
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Your city"
              autoComplete="address-level2"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* License selection */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold">Choose your license</h2>
        <p className="mt-1 text-sm text-gray-500">
          Select how you intend to use this product.
        </p>

        <div className="mt-6 space-y-3">
          <label
            className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition ${
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
                <p className="mt-1 text-sm text-gray-500">
                  For your own projects.
                </p>
              </div>
            </div>

            <span className="font-bold">${basePrice.toFixed(2)}</span>
          </label>

          <label
            className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition ${
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
                <p className="mt-1 text-sm text-gray-500">
                  For client or commercial projects.
                </p>
              </div>
            </div>

            <span className="font-bold">
              ${(basePrice * 2).toFixed(2)}
            </span>
          </label>
        </div>
      </section>

      {/* Final total */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold">Review your order</h2>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">{productName}</span>
            <span className="font-medium">${basePrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">License</span>
            <span className="font-medium capitalize">{license}</span>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-400">
              Displayed in USD. Any applicable taxes or fees will be
              confirmed before payment.
            </p>
          </div>
        </div>

        <label className="mt-6 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) => setAcceptedTerms(event.target.checked)}
            className="mt-1 h-4 w-4 accent-emerald-700"
          />
          <span className="text-sm leading-6 text-gray-600">
            I agree to the{" "}
            <a
              href="/licenses"
              target="_blank"
              className="font-semibold text-emerald-700 hover:underline"
            >
              license terms
            </a>{" "}
            and understand the permitted use of this product.
          </span>
        </label>

        {message && (
          <div
            role="status"
            className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800"
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-4 font-semibold text-white transition hover:bg-emerald-800"
        >
          <LockKeyhole size={17} />
          Continue to payment
        </button>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
          <CheckCircle2 size={15} />
          No payment is taken by this demo form.
        </p>
      </section>
    </form>
  );
}