export default function ProductPurchase({ slug, name, price }: { slug: string; name: string; price: number }) {
  return (
    <div className="rounded-2xl border p-6">
      <p className="text-2xl font-semibold">${price}</p>
      <a href={`/checkout?product=${slug}`} className="mt-4 inline-block rounded-xl bg-neutral-950 px-6 py-3 text-white">
        Buy {name}
      </a>
    </div>
  );
}
