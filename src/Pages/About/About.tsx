// src/Pages/about/About.tsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* 1) HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-slate-500">About Us</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              We’re building the easiest way to move in your city
            </h1>
            <p className="mt-4 text-slate-600">
              From Dhaka to everywhere next—our mission is to make everyday rides
              fast, safe, and fair for both riders and drivers.
            </p>
          </div>
        </div>
      </section>

      {/* 2) COMPANY BACKGROUND */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Our Story</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              We started RideGo to fix the everyday commute. Long waits, unsafe
              rides, confusing pricing—we’ve been there. So we built a platform
              that connects riders and drivers with transparency and trust,
              backed by solid real-time tech and thoughtful UX.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Today, RideGo powers seamless ride requests, a modern driver app
              with clear earnings, and admin tools that keep the ecosystem fair
              and efficient. And we’re just getting started.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-fuchsia-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">What We Do</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>• On-demand ride requests with live tracking</li>
              <li>• Driver portal to go online, manage status & earnings</li>
              <li>• Admin dashboard for user safety & platform integrity</li>
              <li>• Transparent pricing and helpful support</li>
            </ul>
            <div className="mt-5 flex gap-2">
              <Link
                to="#"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Request a Ride
              </Link>
              <Link
                to="#"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Go Online (Driver)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3) MISSION / VISION / VALUES */}
      <section className="px-4 py-14">
        <div className="container mx-auto rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon="🎯"
              title="Mission"
              desc="Make urban travel effortless and trustworthy for everyone."
            />
            <InfoCard
              icon="🌍"
              title="Vision"
              desc="A future where moving across your city is as easy as sending a text."
            />
            <InfoCard
              icon="💛"
              title="Values"
              desc="Safety first, user empathy, transparency, and craftsmanship."
            />
          </div>
        </div>
      </section>

      {/* 4) MILESTONES / TIMELINE */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-xl font-bold text-slate-900">Milestones</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatBox label="Founded" value="2025" hint="Origin in Dhaka" />
          <StatBox label="Users onboarded" value="5k+" hint="Riders & Drivers" />
          <StatBox label="Avg. ETA" value="~11m" hint="Citywide average" />
          <StatBox label="CSAT" value="4.7/5" hint="Customer satisfaction" />
        </div>
      </section>

      {/* 5) TEAM PROFILES */}
      <section className="px-4 py-14">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-slate-900">Meet the Team</h2>
          <p className="mt-2 text-sm text-slate-600">
            Builders, designers, and ops folks who obsess over the details.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TEAM.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* 6) CULTURE / PRINCIPLES */}
      <section className="container mx-auto px-4 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">How We Work</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Customer-first decisions</li>
              <li>• Ship fast, learn faster</li>
              <li>• Simple  clever</li>
              <li>• Strong opinions, loosely held</li>
            </ul>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Security & privacy by default</li>
              <li>• Data-driven, but human-centered</li>
              <li>• Earn trust with transparency</li>
              <li>• No egos, just outcomes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7) CTA */}
      <section className="px-4 pb-20">
        <div className="container mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-fuchsia-600 p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white">
            Want to build the future of mobility with us?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-blue-100">
            We’re always looking for thoughtful engineers, designers, and ops
            leaders who care about impact.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="#"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm"
            >
              Join as Driver
            </Link>
            <Link
              to="#"
              className="rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white/95 hover:bg-white/10"
            >
              Request a Ride
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small presentational pieces ---------- */

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function StatBox({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
      {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}
    </div>
  );
}

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

const TEAM: Member[] = [
  {
    name: "Ayaan Rahman",
    role: "CEO",
    bio: "Product-first leader focused on trust & growth.",
    initials: "AR",
  },
  {
    name: "Maya Chowdhury",
    role: "CTO",
    bio: "Scales platforms with clean architecture.",
    initials: "MC",
  },
  {
    name: "Nabil Hossain",
    role: "Backend Lead",
    bio: "APIs, auth, billing, and data pipelines.",
    initials: "NH",
  },
  {
    name: "Rifah Islam",
    role: "Mobile Lead",
    bio: "Flutter & delightful app experiences.",
    initials: "RI",
  },
  {
    name: "Ziaul Karim",
    role: "Product Design",
    bio: "Accessible, high-clarity UX for all users.",
    initials: "ZK",
  },
  {
    name: "Shama Akter",
    role: "Operations",
    bio: "Safety & support that riders can rely on.",
    initials: "SA",
  },
];

function TeamCard({ name, role, bio, initials }: Member) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-100">
      {/* accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-fuchsia-50 text-sm font-bold text-slate-800">
          {initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </div>
      <p className="text-sm text-slate-600">{bio}</p>
    </div>
  );
}
