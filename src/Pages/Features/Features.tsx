// src/Pages/features/Features.tsx
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-slate-500">Features</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Everything you need to <span className="text-blue-600">ride</span>
              ,<span className="text-emerald-600"> drive</span>, and{" "}
              <span className="text-fuchsia-600">manage</span>.
            </h1>
            <p className="mt-4 text-slate-600">
              A single platform with purpose-built tools for riders, drivers,
              and admins— fast, safe, and transparent.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Request a Ride
              </Link>
              <Link
                to="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Go Online (Driver)
              </Link>
              <Link
                to="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RIDER FEATURES */}
      <SectionTitle
        kicker="Rider"
        title="Book rides in seconds, with total peace of mind"
        desc="From pickup to drop-off, everything is designed to be fast, clear, and safe."
      />
      <div className="container mx-auto px-4 pb-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            emoji="⚡"
            title="Instant Requests"
            desc="Choose pickup & destination, see ETA/fare, and book instantly."
          />
          <FeatureCard
            emoji="📍"
            title="Live Tracking"
            desc="Track your driver in real time from pickup to drop-off."
          />
          <FeatureCard
            emoji="🛡️"
            title="Safety First"
            desc="Verified drivers, trip sharing, and 24/7 support."
          />
          <FeatureCard
            emoji="💳"
            title="Cashless Payments"
            desc="Transparent pricing and receipts—no surprises."
          />
          <FeatureCard
            emoji="⭐"
            title="Ratings & Feedback"
            desc="Rate your trip and help improve service quality."
          />
          <FeatureCard
            emoji="🧾"
            title="Ride History"
            desc="View your past rides, costs, and routes anytime."
          />
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-900">Quick start</h4>
          <p className="mt-1 text-sm text-slate-600">
            1) Create an account → 2) Set pickup/destination → 3) Confirm fare →
            4) Track driver → 5) Pay & rate.
          </p>
          <Link
            to="#"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Request a Ride
          </Link>
        </div>
      </div>

      {/* DRIVER FEATURES */}
      <SectionTitle
        kicker="Driver"
        title="Earn flexibly with tools that respect your time"
        desc="Go online, accept requests, and manage your status with one tap."
      />
      <div className="container mx-auto px-4 pb-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            emoji="🟢"
            title="Go Online"
            desc="Toggle availability and start receiving ride requests."
          />
          <FeatureCard
            emoji="📥"
            title="Smart Requests"
            desc="Get relevant requests based on proximity & performance."
          />
          <FeatureCard
            emoji="💸"
            title="Transparent Earnings"
            desc="Clear ride costs & payouts—know exactly what you make."
          />
          <FeatureCard
            emoji="🔐"
            title="Account Controls"
            desc="View approval status; admins can approve/suspend if needed."
          />
          <FeatureCard
            emoji="🧭"
            title="Guided Trip Flow"
            desc="Step-by-step flow: pickup → ride → complete."
          />
          <FeatureCard
            emoji="📊"
            title="Performance Insights"
            desc="Monitor acceptance rate, completion rate, and ratings."
          />
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-900">Pro tip</h4>
          <p className="mt-1 text-sm text-slate-600">
            Keep your profile updated (vehicle info, license) for faster admin
            approval and higher-quality requests.
          </p>
          <Link
            to="#"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Go Online
          </Link>
        </div>
      </div>

      {/* ADMIN FEATURES */}
      <SectionTitle
        kicker="Admin"
        title="Operate safely with full visibility"
        desc="See the whole system at a glance, and take action when it matters."
      />
      <div className="container mx-auto px-4 pb-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            emoji="📋"
            title="All Users View"
            desc="Search, filter, and paginate across riders & drivers."
          />
          <FeatureCard
            emoji="🧑‍⚖️"
            title="User Controls"
            desc="Block/unblock, approve drivers, and suspend/unsuspend users."
          />
          <FeatureCard
            emoji="📈"
            title="Dashboard Analytics"
            desc="Totals, role breakdown, online/blocked/suspended stats."
          />
          <FeatureCard
            emoji="🔎"
            title="Auditable Data"
            desc="Track creation & update timestamps for accountability."
          />
          <FeatureCard
            emoji="🔐"
            title="Role-based Access"
            desc="Admin-only endpoints secured by bearer tokens."
          />
          <FeatureCard
            emoji="🧰"
            title="Operational Tools"
            desc="Cancel problematic rides, verify drivers, and handle support."
          />
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-900">Heads up</h4>
          <p className="mt-1 text-sm text-slate-600">
            Admin actions are logged. Keep your admin token secure and rotate
            regularly.
          </p>
          <Link
            to="#"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Open Admin Panel
          </Link>
        </div>
      </div>

      {/* COMPARISON SNAPSHOT */}
      <section className="container mx-auto px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Quick Compare</h3>
          <p className="text-xs text-slate-500 mb-4">
            Who can do what at a glance.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left bg-slate-50">
                  <th className="px-3 py-2 font-semibold text-slate-600">
                    Capability
                  </th>
                  <th className="px-3 py-2 font-semibold text-slate-600">
                    Rider
                  </th>
                  <th className="px-3 py-2 font-semibold text-slate-600">
                    Driver
                  </th>
                  <th className="px-3 py-2 font-semibold text-slate-600">
                    Admin
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Request ride", "✅", "—", "—"],
                  ["Cancel own ride (requested)", "✅", "—", "✅"],
                  ["Go online / receive jobs", "—", "✅", "—"],
                  ["Approve drivers", "—", "—", "✅"],
                  ["Block / Unblock users", "—", "—", "✅"],
                  ["Suspend / Unsuspend users", "—", "—", "✅"],
                  ["View all users", "—", "—", "✅"],
                  ["View own rides / earnings", "✅", "✅", "—"],
                ].map(row => (
                  <tr key={row[0]}>
                    <td className="px-3 py-2 text-slate-700">{row[0]}</td>
                    <td className="px-3 py-2">{row[1]}</td>
                    <td className="px-3 py-2">{row[2]}</td>
                    <td className="px-3 py-2">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="container mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-fuchsia-600 p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white">
            Ready to try it out?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100">
            Join thousands of riders & drivers who trust our platform every day.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="#"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm"
            >
              Create Account
            </Link>
            <Link
              to="#"
              className="rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white/95 hover:bg-white/10"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ----- UI bits (presentation only) ----- */

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="container mx-auto px-4 pt-14">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {kicker}
        </div>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </section>
  );
}

function FeatureCard({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="text-2xl">{emoji}</div>
      <h4 className="mt-2 text-base font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
