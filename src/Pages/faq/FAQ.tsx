// src/Pages/faq/FAQ.tsx
import { useMemo, useState } from "react";
import type { JSX } from "react/jsx-runtime";

type FAQItem = {
  q: string;
  a: string | JSX.Element;
  category: "Rider" | "Driver" | "Admin" | "Account" | "Payments" | "Safety";
  keywords?: string[];
};

const FAQ_DATA: FAQItem[] = [
  // Rider
  {
    q: "How do I request a ride?",
    a: "Go to Dashboard → Ride Request, enter pickup & destination, then confirm.",
    category: "Rider",
    keywords: ["book", "ride", "request", "pickup", "destination"],
  },
  {
    q: "Can I cancel after requesting?",
    a: "Yes. While the ride is still in 'requested' status, open My Rides and press Cancel.",
    category: "Rider",
    keywords: ["cancel", "requested", "my rides"],
  },
  {
    q: "Where do I see my past trips?",
    a: "Open My Rides on your dashboard to view your ride history.",
    category: "Rider",
    keywords: ["history", "past", "trips", "rides"],
  },

  // Driver
  {
    q: "How do I go online to receive jobs?",
    a: "Open Dashboard → Go Online. Toggle availability to start receiving requests.",
    category: "Driver",
    keywords: ["driver", "online", "availability", "jobs"],
  },
  {
    q: "Do I need admin approval to drive?",
    a: "Yes. Upload license/vehicle info. Admins approve drivers before they can accept rides.",
    category: "Driver",
    keywords: ["approval", "license", "vehicle", "verify"],
  },

  // Admin
  {
    q: "Where can I manage users?",
    a: "Go to Admin Panel (Dashboard → Users). You can view, search, filter, and paginate.",
    category: "Admin",
    keywords: ["admin", "users", "manage", "panel", "dashboard"],
  },
  {
    q: "How do I block/unblock or suspend a user?",
    a: "Open a user's details from Admin → Users. Use the action buttons on the details page.",
    category: "Admin",
    keywords: ["block", "unblock", "suspend", "user", "details"],
  },

  // Account
  {
    q: "I forgot my password. What now?",
    a: "Use the Login page 'Forgot password' flow (or contact support via the Contact page).",
    category: "Account",
    keywords: ["password", "reset", "forgot"],
  },
  {
    q: "How do I change my email?",
    a: "Go to your profile settings (coming soon), or reach out via Contact for manual updates.",
    category: "Account",
    keywords: ["email", "change", "profile"],
  },

  // Payments
  {
    q: "What payment methods are supported?",
    a: "Cashless by default. More local gateways are rolling out soon.",
    category: "Payments",
    keywords: ["payment", "cards", "cashless", "gateway"],
  },
  {
    q: "Where can I see my receipts?",
    a: "Each completed ride shows its cost in My Rides. Exports coming soon.",
    category: "Payments",
    keywords: ["receipt", "invoice", "cost"],
  },

  // Safety
  {
    q: "How does safety work on the platform?",
    a: "Verified drivers, live tracking, and trip sharing. You can also report issues from your dashboard.",
    category: "Safety",
    keywords: ["safety", "report", "verify", "tracking"],
  },
  {
    q: "How do I report a problem with a ride?",
    a: "Open the ride in My Rides and use the report option, or contact us via the Contact page.",
    category: "Safety",
    keywords: ["report", "problem", "support", "contact"],
  },
];

const CATEGORIES: Array<FAQItem["category"] | "All"> = [
  "All",
  "Rider",
  "Driver",
  "Admin",
  "Account",
  "Payments",
  "Safety",
];

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_DATA.filter(item => {
      const inCategory = category === "All" || item.category === category;
      if (!q) return inCategory;

      const haystack = [
        item.q,
        typeof item.a === "string" ? item.a : "",
        item.keywords?.join(" ") ?? "",
        item.category,
      ]
        .join(" ")
        .toLowerCase();

      return inCategory && haystack.includes(q);
    });
  }, [query, category]);

  return (
    <main className="min-h-screen">
      {/* Hero / Header */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="container mx-auto px-4 py-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            FAQs
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Quick answers to common questions about riding, driving, and admin
            tools.
          </p>

          {/* Search + Filters */}
          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search questions (e.g., cancel, go online, block)..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                aria-label="Search FAQs"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="overflow-x-auto">
              <div className="flex items-center gap-2">
                {CATEGORIES.map(c => {
                  const active = c === category;
                  return (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`whitespace-nowrap rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                        active
                          ? "border-slate-300 bg-white text-slate-900 shadow-sm"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white"
                      }`}
                      aria-pressed={active}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="mb-4 text-xs text-slate-500">
            Showing <b>{filtered.length}</b> of {FAQ_DATA.length} questions
            {category !== "All" ? (
              <>
                {" "}
                in <b>{category}</b>
              </>
            ) : null}
            {query ? (
              <>
                {" "}
                for “<b>{query}</b>”
              </>
            ) : null}
          </div>

          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <ul className="divide-y divide-slate-100">
              {filtered.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <li key={item.q}>
                    <button
                      className="flex w-full items-start justify-between gap-4 py-4 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {item.q}
                        </div>
                        <div className="mt-1 inline-block rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                          {item.category}
                        </div>
                      </div>

                      <span
                        className={`mt-1 inline-grid h-6 w-6 place-items-center rounded-full border text-xs transition ${
                          isOpen
                            ? "rotate-180 border-blue-200 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-600"
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all ${
                        isOpen ? "max-h-[400px] pb-4" : "max-h-0"
                      }`}
                    >
                      <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                        {item.a}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Extra help */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm">
          Didn’t find what you need?{" "}
          <a
            href="/contact"
            className="font-semibold text-blue-600 underline underline-offset-2"
          >
            Contact support
          </a>{" "}
          — we usually reply within 24–48 hours.
        </div>
      </section>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="grid place-items-center py-10 text-center">
      <div className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600">
        No matches
      </div>
      <p className="mt-2 max-w-md text-sm text-slate-600">
        Try a different keyword (e.g., “cancel”, “online”, “block”, “payments”)
        or switch the category filter.
      </p>
    </div>
  );
}
