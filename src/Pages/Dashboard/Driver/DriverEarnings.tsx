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

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, r) => {
        acc.earnings += r.totalEarnings || 0;
        acc.rides += r.totalRides || 0;
        return acc;
      },
      { earnings: 0, rides: 0 }
    );
  }, [rows]);

  return (
    <div className="mx-auto max-w-6xl py-8 px-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Earnings
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            View your completed ride earnings over time.
          </p>
        </div>

        {/* Range Toggle */}
        <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
          {(["daily", "weekly", "monthly"] as Range[]).map(r => (
            <button
              key={r}
              onClick={() => {
                setRange(r);
                refetch();
              }}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                range === r
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {r[0].toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="Total Earnings"
          value={`$${totals.earnings.toFixed(2)}`}
        />
        <StatCard label="Total Rides" value={totals.rides.toString()} />
        <StatCard label="Buckets" value={rows.length.toString()} />
      </div>

      {/* Chart Card */}
      <div
        className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        {isLoading ? (
          <div className="py-16 text-center text-slate-500">Loading chart…</div>
        ) : error ? (
          <div className="py-16 text-center text-red-600">
            Failed to load earnings
          </div>
        ) : rows.length === 0 ? (
          <div className="py-16 text-center text-slate-500">
            No completed rides yet.
          </div>
        ) : (
          <>
            {/* Line for earnings over time */}
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

            {/* Bar for ride counts */}
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
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
      style={{
        background:
          "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
      }}
    >
      <p className="text-xs font-semibold text-slate-600">{label}</p>
      <p className="mt-1 text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
