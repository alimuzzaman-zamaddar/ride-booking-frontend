/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { useGetEarningsSummaryQuery } from "../../../redux/features/driver/driver.api";

type Range = "daily" | "weekly" | "monthly";

export default function DriverEarnings() {
  const [range, setRange] = useState<Range>("weekly");
  const { data, isLoading, error, refetch } = useGetEarningsSummaryQuery(range);

  const rows = data?.data ?? [];

  const totals = useMemo(
    () =>
      rows.reduce(
        (acc, r) => {
          acc.earnings += r.totalEarnings || 0;
          acc.rides += r.totalRides || 0;
          return acc;
        },
        { earnings: 0, rides: 0 }
      ),
    [rows]
  );

  const maxEarn = Math.max(1, ...rows.map(r => r.totalEarnings || 0));
  const maxRides = Math.max(1, ...rows.map(r => r.totalRides || 0));

  return (
    <div className="mx-auto max-w-6xl py-8 px-5">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Earnings Overview
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Track your completed ride earnings and volume over time.
          </p>
        </div>

        {/* Range Toggle */}
        <div className="inline-flex items-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
          {(["daily", "weekly", "monthly"] as Range[]).map(r => (
            <button
              key={r}
              onClick={() => {
                setRange(r);
                refetch();
              }}
              className={`px-3 py-1.5 text-sm font-medium rounded-xl transition-all
                ${
                  range === r
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
            >
              {r[0].toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard
          title="Total Earnings"
          value={`$${totals.earnings.toFixed(2)}`}
          hint={rows.length ? "Sum across selected range" : "No data yet"}
          pct={
            rows.length
              ? Math.min(
                  100,
                  Math.round((totals.earnings / (maxEarn * rows.length)) * 100)
                )
              : 0
          }
        />
        <KpiCard
          title="Total Rides"
          value={totals.rides.toString()}
          hint={rows.length ? "Completed rides in range" : "No rides yet"}
          pct={
            rows.length
              ? Math.min(
                  100,
                  Math.round((totals.rides / (maxRides * rows.length)) * 100)
                )
              : 0
          }
        />
        <KpiCard
          title="Buckets"
          value={rows.length.toString()}
          hint={
            range === "daily"
              ? "Days counted"
              : range === "weekly"
              ? "ISO weeks"
              : "Months"
          }
          pct={rows.length ? 100 : 0}
        />
      </div>

      {/* Chart Card */}
      <div
        className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.95) 100%)",
        }}
      >
        {/* top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" />

        <div className="p-5 sm:p-6">
          {isLoading ? (
            <div className="py-16 text-center text-slate-500">
              Loading chart…
            </div>
          ) : error ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-center text-rose-800">
              Failed to load earnings
            </div>
          ) : rows.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              No completed rides yet.
            </div>
          ) : (
            <>
              {/* Legend */}
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                  <span className="inline-block h-2 w-6 rounded-full bg-slate-900/80" />
                  Earnings (line)
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                  <span className="inline-block h-2 w-2 rounded-sm bg-slate-400" />
                  Rides (bars)
                </span>
              </div>

              {/* Earnings line */}
              <div className="h-72 w-full">
                <ResponsiveContainer>
                  <LineChart data={rows}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="totalEarnings" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Rides bar */}
              <div className="mt-6 h-60 w-full">
                <ResponsiveContainer>
                  <BarChart data={rows}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalRides" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- UI bits ---------- */

function KpiCard({
  title,
  value,
  hint,
  pct,
}: {
  title: string;
  value: string;
  hint?: string;
  pct?: number;
}) {
  const width = Math.max(0, Math.min(100, pct ?? 0));
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 opacity-60" />
      <div className="text-xs font-medium text-slate-500">{title}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
      {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}

      <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-slate-900/80 transition-all"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
