
import React from "react";
const Link = ({ href, children, ...props }: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} {...props}>
    {children}
  </a>
);
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Smartphone,
  Layers3,
  Zap,
  ShieldCheck,
  ShoppingBag,
  Globe,
} from "lucide-react";

const products = [
  {
    category: "Starter kit · Flutter · Firebase",
    name: "FinTech Starter Kit",
    description:
      "Wallet, transfers and spending insights, ready to brand and launch.",
    price: "$79",
    tag: "Popular",
    color: "bg-emerald-50",
    icon: Smartphone,
  },
  {
    category: "App template · Flutter · REST API",
    name: "E-commerce App Template",
    description:
      "Catalog, cart and checkout screens with a clean, scalable structure.",
    price: "$99",
    tag: "App template",
    color: "bg-orange-50",
    icon: ShoppingBag,
  },
  {
    category: "UI kit · Flutter Web",
    name: "Admin Dashboard UI Kit",
    description:
      "Charts, tables and forms for internal tools and back offices.",
    price: "$49",
    tag: "UI kit",
    color: "bg-blue-50",
    icon: Layers3,
  },
];

const services = [
  {
    number: "01",
    icon: Smartphone,
    title: "Custom app development",
    description:
      "Cross-platform iOS and Android apps with clean architecture and store-ready releases.",
    points: ["Flutter development", "Firebase & API integration", "App Store and Play Store launch"],
  },
  {
    number: "02",
    icon: Zap,
    title: "MVP in weeks",
    description:
      "Validate your idea quickly with a focused first version, backend and analytics.",
    points: ["MVP planning", "Core feature development", "Launch-ready foundation"],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Audits & app rescue",
    description:
      "Slow or buggy app? I identify the problems, improve performance and create a clear path forward.",
    points: ["Code and architecture review", "Performance improvements", "Bug fixing"],
  },
];

const projects = [
  {
    category: "Fintech · Flutter · Firebase",
    name: "PayWise",
    description:
      "A mobile wallet for sending money, paying bills and tracking spending, with biometric login and instant notifications.",
    color: "from-emerald-100 to-teal-50",
    label: "PW",
  },
  {
    category: "E-commerce · Flutter · REST API",
    name: "FreshCart",
    description:
      "A grocery delivery app with live order tracking, saved baskets and smooth checkout for busy households.",
    color: "from-orange-100 to-amber-50",
    label: "FC",
  },
  {
    category: "Health · Flutter · Supabase",
    name: "CareLink",
    description:
      "A telehealth app for booking appointments, video consultations and keeping health records in one place.",
    color: "from-blue-100 to-indigo-50",
    label: "CL",
  },
];

const articles = [
  {
    category: "State management",
    title: "Riverpod vs Bloc: which should you pick for your next app?",
    description:
      "A practical comparison for real projects, with guidance on when to choose each.",
    date: "Nov 5, 2026",
    read: "8 min read",
    number: "01",
  },
  {
    category: "For founders",
    title: "How much does a Flutter app cost to build?",
    description:
      "Understand the factors that affect app development costs before starting your project.",
    date: "Oct 29, 2026",
    read: "6 min read",
    number: "02",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500">
          {description}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-neutral-950">

      {/* HERO */}
      <section className="relative border-b border-neutral-100">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Independent Flutter developer & product builder
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[68px]">
              Ready-made Flutter products,
              <span className="text-emerald-700"> or an app built for you.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-500">
              BuiltByAfnan is an independent software brand. Buy
              production-ready Flutter templates and starter kits, or hire me
              to build something custom.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-medium text-white transition hover:bg-emerald-800"
              >
                Browse products <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-200 px-7 py-4 text-sm font-medium transition hover:border-neutral-950"
              >
                Hire me for custom work <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-emerald-700" /> Flutter
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-emerald-700" /> iOS & Android
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-emerald-700" /> Firebase
              </span>
            </div>
          </div>

          {/* APP PREVIEW */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-full bg-emerald-100/60 blur-3xl" />

            <div className="relative rounded-[28px] border border-neutral-200 bg-white p-5 shadow-2xl shadow-neutral-200/70 sm:p-7">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
                <div>
                  <p className="text-xs text-neutral-400">Your app, at a glance</p>
                  <h3 className="mt-1 text-lg font-semibold">PayWise</h3>
                </div>
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800">
                  <Smartphone size={22} />
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-neutral-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">Total balance</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">•••• 2841</span>
                </div>
                <p className="mt-4 text-4xl font-semibold tracking-tight">$12,480.50</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-emerald-300">
                  <ArrowUpRight size={16} /> 12.8% this month
                </div>
                <div className="mt-8 flex gap-2">
                  <div className="h-2 flex-1 rounded-full bg-emerald-400" />
                  <div className="h-2 flex-1 rounded-full bg-emerald-400/60" />
                  <div className="h-2 flex-1 rounded-full bg-white/15" />
                  <div className="h-2 flex-1 rounded-full bg-white/15" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <p className="text-xs text-neutral-400">Animations</p>
                  <p className="mt-2 text-xl font-semibold">60 fps</p>
                  <p className="mt-1 text-xs text-emerald-700">Smooth experience</p>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <p className="text-xs text-neutral-400">Platform support</p>
                  <p className="mt-2 text-xl font-semibold">2 platforms</p>
                  <p className="mt-1 text-xs text-emerald-700">iOS & Android</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {["Smooth animations", "Offline mode", "Push notifications"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="rounded-full bg-emerald-100 p-1 text-emerald-800">
                      <Check size={13} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Built with</p>
                  <p className="text-sm font-semibold">Flutter & Dart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STRIP */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 py-8 text-sm font-semibold text-neutral-400 sm:px-10">
          {["Flutter", "Dart", "Firebase", "Supabase", "Riverpod", "Codemagic"].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Digital products"
            title="Featured Flutter products"
            description="Start your next project with production-ready foundations. Spend less time building common features and more time creating."
          />
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:text-emerald-700"
          >
            All products <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60"
              >
                <div className={`relative flex h-56 items-center justify-center ${product.color}`}>
                  <div className="flex h-28 w-28 items-center justify-center rounded-[28px] bg-white shadow-xl shadow-neutral-900/10 transition duration-300 group-hover:scale-110">
                    <Icon size={48} strokeWidth={1.4} className="text-neutral-800" />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-600">
                    {product.tag}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium text-neutral-400">{product.category}</p>
                  <h3 className="mt-3 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-3 min-h-[52px] text-sm leading-6 text-neutral-500">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                    <span className="text-xl font-semibold">{product.price}</span>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition group-hover:text-emerald-700"
                    >
                      View product <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PRODUCT PHILOSOPHY */}
      <section className="bg-neutral-950 py-24 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <SectionHeading
              eyebrow="The idea behind BuiltByAfnan"
              title="Every client project becomes a product."
              description="My work is both my marketing and my inventory. Real projects prove the quality, and the reusable parts become products you can buy."
            />
            <p className="max-w-md text-sm leading-7 text-neutral-400 lg:justify-self-end">
              Build once. Learn from real users. Improve the foundation.
              Then make those improvements available to other developers and
              founders.
            </p>
          </div>

          <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Build for clients",
                text: "Real apps for real users, shipped to the stores.",
              },
              {
                n: "02",
                title: "Package as products",
                text: "The reusable parts become kits and templates.",
              },
              {
                n: "03",
                title: "Sell them again",
                text: "Each product reaches new developers and builds the brand.",
              },
            ].map((item) => (
              <div key={item.n}>
                <span className="text-sm text-emerald-400">{item.n}</span>
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-neutral-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Work with me"
          title="Need something custom? I'll build it for you."
          description="From a focused MVP to a complete mobile application, get practical development support from idea to launch."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.number} className="rounded-3xl border border-neutral-200 p-7 transition hover:border-emerald-700">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-800">
                    <Icon size={23} />
                  </div>
                  <span className="text-sm text-neutral-300">{service.number}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {service.description}
                </p>
                <ul className="mt-7 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-neutral-600">
                      <Check size={15} className="shrink-0 text-emerald-700" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-emerald-700"
                >
                  Explore service <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            eyebrow="A clear process"
            title="From idea to launch in four steps."
            description="No unnecessary complexity. You stay involved throughout the development process."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Discover", "A short call to define your goals, users and project scope."],
              ["02", "Design", "Clean screens and a clickable flow you can approve early."],
              ["03", "Build", "Regular Flutter builds you can test on your own phone."],
              ["04", "Launch", "Store submission, monitoring and support after release."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-neutral-300 pt-6">
                <span className="text-sm font-medium text-emerald-700">{number}</span>
                <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Check out my recent app projects."
            description="A selection of mobile app concepts and projects across different industries."
          />
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:text-emerald-700"
          >
            See all projects <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="group">
              <div className={`flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${project.color}`}>
                <div className="flex h-32 w-32 items-center justify-center rounded-[32px] border border-white/70 bg-white/70 text-4xl font-bold text-neutral-800 shadow-xl transition duration-300 group-hover:scale-110">
                  {project.label}
                </div>
              </div>
              <p className="mt-6 text-xs font-medium text-neutral-400">{project.category}</p>
              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <ArrowUpRight size={19} className="text-neutral-400 transition group-hover:text-emerald-700" />
              </div>
              <p className="mt-3 text-sm leading-7 text-neutral-500">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 sm:px-10 lg:grid-cols-4">
          {[
            ["18", "Apps shipped"],
            ["12", "Happy clients"],
            ["5", "Years with Flutter"],
            ["6", "Products and growing"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">{value}<span className="text-emerald-700">+</span></p>
              <p className="mt-3 text-sm text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Insights & articles"
            title="Learn from my blog: Flutter, apps and growth."
            description="Practical articles for founders and developers on building better mobile apps."
          />
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:text-emerald-700"
          >
            All articles <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
          {articles.map((article) => (
            <Link
              href="/blog"
              key={article.number}
              className="group grid gap-5 py-8 transition md:grid-cols-[70px_1fr_220px] md:items-center"
            >
              <span className="text-sm text-neutral-300">{article.number}.</span>
              <div>
                <p className="text-xs font-medium text-emerald-700">{article.category}</p>
                <h3 className="mt-2 max-w-2xl text-xl font-semibold transition group-hover:text-emerald-800 sm:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                  {article.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400 md:justify-end md:gap-5">
                <span>{article.date} · {article.read}</span>
                <ArrowUpRight size={18} className="shrink-0 text-neutral-400 transition group-hover:text-emerald-700" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-neutral-950 px-7 py-16 text-center text-white sm:px-12 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Let's work together
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Have an app idea? Let's build it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-400">
            Whether you need a custom Flutter app or a ready-made product,
            let's find the right solution for your next project.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-300"
          >
            Start a project <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-9 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              BuiltBy<span className="text-emerald-700">Afnan</span>
            </Link>
            <p className="mt-2 text-sm text-neutral-500">
              Independent software brand building Flutter apps and reusable products.
            </p>
          </div>
          <div className="flex items-center gap-5 text-neutral-500">
            <Link href="/contact" aria-label="Contact" className="text-sm hover:text-neutral-950">
              Contact
            </Link>
            <Link href="/work" aria-label="Projects" className="text-sm hover:text-neutral-950">
              Projects
            </Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neutral-950">
              <Code2 size={19} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neutral-950">
              <Globe size={19} />
            </a>
          </div>
        </div>
        <div className="border-t border-neutral-100 py-5 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} BuiltByAfnan. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
