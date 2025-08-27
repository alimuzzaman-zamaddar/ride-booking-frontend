// src/Pages/Dashboard/RiderDashboardPage.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useGetMyRidesQuery } from "../../redux/features/ride/ride.api";

type ActiveStatus =
  | "requested"
  | "accepted"
  | "picked_up"
  | "in_transit"
  | "ongoing" | "completed"
  | "canceled"; 

const RiderDashboardPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetMyRidesQuery();

  const rides = data?.rides ?? [];

  const stats = useMemo(() => {
    const total = rides.length;

    const activeStatuses: ActiveStatus[] = [
      "requested",
      "accepted",
      "picked_up",
      "in_transit",
      "ongoing",
       "completed",
      "canceled"
    ];
    const active = rides.filter(r =>
      activeStatuses.includes(r.status as ActiveStatus)
    ).length;
    const completed = rides.filter(r => r.status === "completed").length;
    const canceled = rides.filter(
      r => r.status === "canceled"
    ).length;

    const totalSpent = rides
      .filter(r => r.status === "completed")
      .reduce((sum, r) => sum + (Number(r.rideCost) || 0), 0);

    // latest 5
    const latest = [...rides]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 5);

    return { total, active, completed, canceled, totalSpent, latest };
  }, [rides]);

  if (isLoading) {
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;
  }

  if (error) {
    const msg = (error as any)?.data?.message || "Failed to load dashboard";
    return <p className="p-4 text-red-600">{msg}</p>;
  }

  return (
    <>
  {isLoading ? (<Loader className="mt-10 text-7xl my-10 text-primary-blue" />
      ) : (     <section className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Rider Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Quick overview of your rides and shortcuts to common actions
        </p>
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Total Rides"
          value={stats.total}
          accent="from-blue-500 to-indigo-500"
          sub={`${stats.completed} completed`}
          barPct={
            stats.total ? Math.round((stats.completed / stats.total) * 100) : 0
          }
        />
        <StatCard
          title="Active"
          value={stats.active}
          accent="from-emerald-500 to-teal-500"
          sub="Requested / Accepted / In transit"
          barPct={
            stats.total ? Math.round((stats.active / stats.total) * 100) : 0
          }
        />
        <StatCard
          title="Cancelled"
          value={stats.canceled}
          accent="from-rose-500 to-pink-500"
          sub={`${
            stats.total ? Math.round((stats.canceled / stats.total) * 100) : 0
          }% of rides`}
          barPct={
            stats.total ? Math.round((stats.canceled / stats.total) * 100) : 0
          }
        />
        <StatCard
          title="Total Spent"
          value={`$${stats.totalSpent.toFixed(2)}`}
          accent="from-fuchsia-500 to-violet-500"
          sub="Completed rides only"
          barPct={
            // just a decorative bar (cap at $200 for display)
            Math.max(
              0,
              Math.min(100, Math.round((stats.totalSpent / 200) * 100))
            )
          }
        />
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <ActionCard
          title="Request a Ride"
          desc="Book a new ride from your current pickup"
          cta="Request"
          onClick={() => navigate("/dashboard/rideRequest")}
        />
        <ActionCard
          title="My Rides"
          desc="View and manage your current rides"
          cta="Open"
          onClick={() => navigate("/dashboard/myRides")}
        />
        <ActionCard
          title="Ride History"
          desc="See past rides with filters"
          cta="Browse"
          onClick={() => navigate("/dashboard/history")}
        />
        <ActionCard
          title="Profile"
          desc="Edit name, phone, and password"
          cta="Edit"
          onClick={() => navigate("/dashboard/profile")}
        />
      </div>

      {/* Latest rides list */}
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900">
            Recent Rides
          </h3>
          <button
            onClick={() => navigate("/dashboard/history")}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            View all →
          </button>
        </div>

        {stats.latest.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            No rides yet. Book your first ride!
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-slate-100">
            {stats.latest.map(r => (
              <li
                key={r._id}
                className="py-3 flex items-center justify-between"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {r.pickupLocation} → {r.destination}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {new Date(r.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="ml-4 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 capitalize">
                    {r.status}
                  </span>
                  <button
                    onClick={() => navigate(`/dashboard/ride/${r._id}`)}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      </section>
      )}
    </>
  );
};

export default RiderDashboardPage;

/* ---------- Reusable UI (same aesthetic as your admin) ---------- */

function StatCard({
  title,
  value,
  accent,
  sub,
  barPct,
}: {
  title: string;
  value: number | string;
  accent:
    | "from-blue-500 to-indigo-500"
    | "from-emerald-500 to-teal-500"
    | "from-rose-500 to-pink-500"
    | "from-fuchsia-500 to-violet-500";
  sub?: string;
  barPct?: number;
}) {
  const pct = Math.max(0, Math.min(100, barPct ?? 0));
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
      />
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-slate-500">{title}</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
          {sub ? (
            <div className="mt-1 text-xs text-slate-500">{sub}</div>
          ) : null}
        </div>
      </div>
      <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-slate-900/80 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function ActionCard({
  title,
  desc,
  cta,
  onClick,
}: {
  title: string;
  desc: string;
  cta: string;
  onClick: () => void;
}) {
  return (
    <div
      className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-100"
      style={{
        background:
          "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
      <div className="mt-2">
        <button
          onClick={onClick}
          className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
