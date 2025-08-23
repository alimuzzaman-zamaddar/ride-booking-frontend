

// src/Pages/home/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1) HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.15) 0%, transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.15) 0%, transparent 60%)",
        }}
      >
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                🚗 Fast • 🔒 Safe • 💳 Cashless
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Get there <span className="text-blue-600">faster</span>, ride
                <span className="text-fuchsia-600"> smarter</span>.
              </h1>
              <p className="mt-4 max-w-xl text-slate-600">
                On-demand rides for everyday moves. From quick errands to
                late-night plans—book in seconds, track in real time, and pay
                seamlessly.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Request a Ride
                  <span className="translate-x-0 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  to="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  Create Account
                </Link>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                Already a driver?{" "}
                <Link
                  to="#"
                  className="font-semibold text-blue-600 underline"
                >
                  Go online
                </Link>
              </div>
            </div>

            {/* Visual / Mock phone */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Now</span>
                    <span>Dhaka</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-gradient-to-br from-blue-50 to-fuchsia-50 p-4">
                    <div className="text-xs text-slate-500">Pickup</div>
                    <div className="text-sm font-semibold text-slate-900">
                      Dhanmondi 27
                    </div>
                    <div className="mt-3 text-xs text-slate-500">
                      Destination
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Gulshan 2
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500">ETA</span>
                      <span className="text-sm font-semibold text-slate-900">
                        11 mins
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
                      <div className="text-[10px] text-slate-500">Fare</div>
                      <div className="text-sm font-semibold text-slate-900">
                        ৳ 220
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
                      <div className="text-[10px] text-slate-500">Safety</div>
                      <div className="text-sm font-semibold text-slate-900">
                        24/7
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2) HOW IT WORKS */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-900">
          How it works
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
          Simple steps to get moving. No fuss, just go.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Sign up",
              desc: "Create your account in seconds.",
              emoji: "📝",
            },
            {
              title: "Set pickup",
              desc: "Choose pickup & destination.",
              emoji: "📍",
            },
            {
              title: "Track live",
              desc: "Live driver location & ETA.",
              emoji: "📡",
            },
            {
              title: "Pay & rate",
              desc: "Cashless payments + feedback.",
              emoji: "💳",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
            >
              <div className="text-2xl">{s.emoji}</div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3) SERVICE HIGHLIGHTS */}
      <section className="px-4 py-16">
        <div className="container mx-auto rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-3">
            <Highlight
              title="Real-time safety"
              desc="Trip sharing, 24/7 support, driver verification—ride with peace of mind."
              icon="🛡️"
            />
            <Highlight
              title="Transparent pricing"
              desc="No surprises. See your fare upfront and pay cashless."
              icon="🔎"
            />
            <Highlight
              title="Reliable drivers"
              desc="Approved drivers with strong ratings and consistent service."
              icon="✅"
            />
          </div>
        </div>
      </section>

      {/* 4) BENEFITS (Rider vs Driver) */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-fuchsia-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">For Riders</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Book in under 10 seconds</li>
              <li>• Track your driver live</li>
              <li>• Safe, verified rides</li>
              <li>• Instant support</li>
            </ul>
            <Link
              to="#"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Request a Ride
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">For Drivers</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Flexible schedule—go online anytime</li>
              <li>• Transparent earnings</li>
              <li>• Fast payouts</li>
              <li>• 24/7 in-app support</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <Link
                to="/sign-up"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Become a Driver
              </Link>
              <Link
                to="/dashboard/goOnline"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Go Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5) TESTIMONIALS */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Loved by our community
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
            Riders and drivers across Bangladesh trust us for daily commutes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ayesha (Rider)",
                text: "Booked in seconds. The live tracking was super accurate. Felt safe the whole trip!",
              },
              {
                name: "Fahim (Driver)",
                text: "Earnings are transparent and support is actually helpful. Going online is smooth.",
              },
              {
                name: "Nishat (Rider)",
                text: "Clean cars, polite driver, and no cash hassle. 10/10 would ride again.",
              },
            ].map((t) => (
              <Testimonial key={t.name} name={t.name} text={t.text} />
            ))}
          </div>
        </div>
      </section>

      {/* 6) PROMO / DOWNLOAD */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Coming soon: Mobile apps 📱
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Seamless booking on iOS & Android. Real-time tracking, secure
                payments, and ride history—right in your pocket.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  App Store (soon)
                </button>
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Google Play (soon)
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-fuchsia-50 p-6">
              <div className="text-sm text-slate-600">
                🔥 New user promo: <b>৳100 off</b> your first ride with code{" "}
                <span className="rounded bg-slate-900 px-2 py-1 text-white">
                  FIRST100
                </span>
              </div>
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">Popular route</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  Shahbag → Mirpur 10
                </div>
                <div className="mt-2 text-xs text-slate-500">Est. Fare</div>
                <div className="text-sm font-semibold text-slate-900">
                  ৳ 210 – 260
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7) CTA */}
      <section className="px-4 pb-20">
        <div className="container mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-fuchsia-600 p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white">
            Ready to move? Your ride is a tap away.
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

/* ---------- tiny presentational helpers ---------- */
function Highlight({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-700">“{text}”</p>
      <div className="mt-3 text-xs font-semibold text-slate-900">{name}</div>
    </div>
  );
}
