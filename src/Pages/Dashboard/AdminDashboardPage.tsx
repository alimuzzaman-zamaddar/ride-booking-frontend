// src/pages/Dashboard/AdminDashboardPage.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import Loader from "../../components/Loader/Loader";
import { useGetAllUsersQuery } from "../../redux/features/admin/admin.api";

const AdminDashboardPage = () => {
  const { data, isLoading, error } = useGetAllUsersQuery();

  const users = data?.data ?? [];

  const stats = useMemo(() => {
    const total = users.length;

    const byRole = users.reduce((acc, u) => {
      acc[u.role] = (acc[u.role] ?? 0) + 1;
      return acc;
    }, {} as Record<"admin" | "driver" | "rider", number>);

    const online = users.filter(u => u.isOnline).length;
    const blocked = users.filter(u => u.isBlocked).length;
    const suspended = users.filter(u => u.isSuspended).length;
    const approvedDrivers = users.filter(
      u => u.role === "driver" && u.isApproved
    ).length;

    const pct = (n: number) => (total ? Math.round((n / total) * 100) : 0);

    return {
      total,
      admins: byRole.admin ?? 0,
      drivers: byRole.driver ?? 0,
      riders: byRole.rider ?? 0,
      online,
      blocked,
      suspended,
      approvedDrivers,
      pct,
    };
  }, [users]);

  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  if (error) {
    const msg = (error as any)?.data?.message || "Failed to load stats";
    return <p className="p-4 text-red-600">{msg}</p>;
  }

  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Overview of users, roles, and system status
        </p>
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value={stats.total}
          accent="from-blue-500 to-indigo-500"
          sub={`${stats.pct(stats.online)}% online`}
          barPct={stats.pct(stats.online)}
        />
        <StatCard
          title="Drivers"
          value={stats.drivers}
          accent="from-amber-500 to-pink-500"
          sub={`${stats.approvedDrivers} approved`}
          barPct={
            stats.drivers
              ? Math.round((stats.approvedDrivers / stats.drivers) * 100)
              : 0
          }
        />
        <StatCard
          title="Riders"
          value={stats.riders}
          accent="from-emerald-500 to-teal-500"
          sub={`${stats.pct(stats.riders)}% of users`}
          barPct={stats.pct(stats.riders)}
        />
        <StatCard
          title="Admins"
          value={stats.admins}
          accent="from-fuchsia-500 to-violet-500"
          sub={`${stats.pct(stats.admins)}% of users`}
          barPct={stats.pct(stats.admins)}
        />
      </div>

      {/* Status breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <StatusCard
          title="Online"
          value={stats.online}
          pct={stats.pct(stats.online)}
          tone="emerald"
        />
        <StatusCard
          title="Blocked"
          value={stats.blocked}
          pct={stats.pct(stats.blocked)}
          tone="rose"
        />
        <StatusCard
          title="Suspended"
          value={stats.suspended}
          pct={stats.pct(stats.suspended)}
          tone="orange"
        />
      </div>

      {/* Role composition mini bars */}
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">
          Role Composition
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Distribution of users by role
        </p>

        <div className="grid gap-3">
          <MiniBar
            label="Drivers"
            value={stats.drivers}
            total={stats.total}
            color="bg-blue-500"
          />
          <MiniBar
            label="Riders"
            value={stats.riders}
            total={stats.total}
            color="bg-amber-500"
          />
          <MiniBar
            label="Admins"
            value={stats.admins}
            total={stats.total}
            color="bg-fuchsia-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPage;

/* ---------- UI bits (no logic changes) ---------- */

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
    | "from-amber-500 to-pink-500"
    | "from-emerald-500 to-teal-500"
    | "from-fuchsia-500 to-violet-500";
  sub?: string;
  barPct?: number;
}) {
  const pct = Math.max(0, Math.min(100, barPct ?? 0));
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
      {/* top accent */}
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
      {/* mini progress */}
      <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-slate-900/80 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function StatusCard({
  title,
  value,
  pct,
  tone, // emerald | rose | orange
}: {
  title: string;
  value: number;
  pct: number;
  tone: "emerald" | "rose" | "orange";
}) {
  const toneMap = {
    emerald: {
      ring: "ring-emerald-100",
      chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
      bar: "bg-emerald-500",
    },
    rose: {
      ring: "ring-rose-100",
      chip: "bg-rose-50 text-rose-700 border-rose-200",
      bar: "bg-rose-500",
    },
    orange: {
      ring: "ring-orange-100",
      chip: "bg-orange-50 text-orange-700 border-orange-200",
      bar: "bg-orange-500",
    },
  }[tone];

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ${toneMap.ring}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-slate-500">{title}</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${toneMap.chip}`}
        >
          {pct}% of users
        </span>
      </div>
      <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
        <div
          className={`h-2 rounded-full ${toneMap.bar}`}
          style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
        />
      </div>
    </div>
  );
}

function MiniBar({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color:
    | "bg-blue-500"
    | "bg-amber-500"
    | "bg-fuchsia-500"
    | "bg-emerald-500"
    | "bg-slate-900";
}) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="w-28 text-xs font-medium text-slate-600">{label}</div>
      <div className="flex-1">
        <div className="h-2 w-full rounded-full bg-slate-100">
          <div
            className={`h-2 rounded-full ${color}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <div className="w-12 text-right text-xs text-slate-500">{pct}%</div>
    </div>
  );
}
