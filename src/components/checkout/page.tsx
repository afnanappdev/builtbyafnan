import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import ProductCheckoutForm from "@/components/products/product-checkout-form";

const products = {
  "fintech-starter-kit": {
    name: "FinTech Starter Kit",
    price: 79,
    category: "Starter Kit",
  },
  "ecommerce-app-template": {
    name: "E-commerce App Template",
    price: 99,
    category: "App Template",
  },
  "admin-dashboard-ui-kit": {
    name: "Admin Dashboard UI Kit",
    price: 49,
    category: "UI Kit",
  },
  "auth-onboarding-pack": {
    name: "Auth & Onboarding Pack",
    price: 29,
    category: "Starter Kit",
  },
};

type ProductSlug = keyof typeof products;

type CheckoutPageProps = {
  searchParams: Promise<{
    product?: string;
    license?: string;
  }>;
};

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const params = await searchParams;
  const slug = params.product;

  if (!slug || !(slug in products)) {
    notFound();
  }

  const product = products[slug as ProductSlug];

  const initialLicense =
    params.license === "commercial" ? "commercial" : "personal";

  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#171717]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href={`/products/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-700"
        >
          <ArrowLeft size={16} />
          Back to product
        </Link>

        <div className="mb-10 mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Secure checkout
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Complete your order
          </h1>

          <p className="mt-3 text-gray-500">
            Enter your details and review your order before continuing.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_400px]">
          <ProductCheckoutForm
            slug={slug}
            productName={product.name}
            basePrice={product.price}
            initialLicense={initialLicense}
          />

          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Order summary</h2>

            <div className="mt-6 rounded-xl bg-[#F5F7F6] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>

                <span className="text-sm font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-b border-gray-100 pb-5 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Product</span>
                <span>${product.price.toFixed(2)}</span>
              </div>

              <p className="text-xs leading-5 text-gray-400">
                Your selected license and final total will be shown in the
                checkout form.
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3 text-sm text-gray-500">
              <ShieldCheck
                size={20}
                className="shrink-0 text-emerald-700"
              />
              <p>
                Your order details will be handled securely when payment
                processing is connected.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-gray-200 p-4">
              <p className="text-sm font-semibold">Need help?</p>
              <p className="mt-1 text-sm text-gray-500">
                Contact us if you have questions about this product or its
                license.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Contact support
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}