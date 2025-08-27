/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {
  Sparkles,
  CarFront,
  Activity,
  HandCoins,
  History,
  Power,
  AlertTriangle,
} from "lucide-react";

import OfflineBanner from "../../components/Drivers/OfflineBanner";
import Loader from "../../components/Loader/Loader";

import { useGetMeQuery } from "../../redux/features/ride/profile.api";
import {
  useGetActiveRideQuery,
  useGetEarningsSummaryQuery,
} from "../../redux/features/driver/driver.api";

const DriverDashboardPage = () => {
  // Profile
  const {
    data: meData,
    isLoading: meLoading,
    error: meError,
    refetch: refetchMe,
  } = useGetMeQuery();

  // Active ride panel
  const {
    data: activeData,
    isLoading: activeLoading,
    error: activeError,
    refetch: refetchActive,
  } = useGetActiveRideQuery();

  // Small earnings snapshot (weekly by default)
  const {
    data: earnWeekly,
    isLoading: earnLoading,
    error: earnError,
    refetch: refetchEarnings,
  } = useGetEarningsSummaryQuery("weekly");

  const me = meData?.data;
  const activeRide = activeData?.ride ?? null;

  const blockedOrSuspended = me?.isBlocked || me?.isSuspended;
  // const offlineNotice = !me?.isOnline;

  // Loading skeleton
  if (meLoading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader className="mt-10 text-7xl my-10 text-primary-blue" />
      </div>
    );

  // Error guard
  if (meError)
    return (
      <div className="p-6 text-red-600">
        Failed to load your profile. Please refresh.
      </div>
    );

  if (!me) return <div className="p-6">Profile not found</div>;

  // Earnings snapshot totals
  const rows = earnWeekly?.data ?? [];
  const totals = rows.reduce(
    (acc, r) => {
      acc.earnings += r.totalEarnings || 0;
      acc.rides += r.totalRides || 0;
      return acc;
    },
    { earnings: 0, rides: 0 }
  );

  const disableRideWork =
    blockedOrSuspended || me.isApproved === false || !me.isOnline;

  const disabledReason = blockedOrSuspended
    ? me.isBlocked
      ? "Your account is blocked. Contact support."
      : "Your account is suspended. Contact support."
    : me.isApproved === false
    ? "Waiting for admin approval."
    : !me.isOnline
    ? "Go online to start receiving and managing rides."
    : "";

  return (
    <section className="flex flex-col gap-6">
      {/* Online/Offline banner */}
      <OfflineBanner isOnline={me?.isOnline} />

      {/* Headline */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Driver Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Welcome{me.name ? `, ${me.name}` : ""}. Manage your availability,
            rides, and earnings.
          </p>
        </div>
        <button
          onClick={() => {
            refetchMe();
            refetchActive();
            refetchEarnings();
          }}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <Sparkles size={16} /> Refresh
        </button>
      </div>

      {/* Account state warnings */}
      {disabledReason ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 flex items-center gap-2">
          <AlertTriangle size={16} /> {disabledReason}
        </div>
      ) : null}

      {/* Top stat chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Status"
          value={me.isOnline ? "Online" : "Offline"}
          note={me.isApproved ? "Approved" : "Pending approval"}
        />
        <StatCard
          title="This Week Earnings"
          value={`$${totals.earnings.toFixed(2)}`}
          loading={earnLoading}
          error={!!earnError}
          note={`${totals.rides} rides`}
        />
        <StatCard
          title="Account"
          value={
            me.isBlocked
              ? "Blocked"
              : me.isSuspended
              ? "Suspended"
              : "Good Standing"
          }
          tone={me.isBlocked || me.isSuspended ? "bad" : "good"}
        />
        <StatCard title="Role" value="Driver" note={me.email} />
      </div>

      {/* Quick actions */}
      <div
        className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        <h3 className="text-base font-semibold text-slate-900">
          Quick Actions
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Jump into your most common tasks
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          <ActionTile
            to="/dashboard/online"
            label={me.isOnline ? "Go Offline" : "Go Online"}
            icon={<Power size={18} />}
            hint="Toggle your availability"
          />
          <ActionTile
            to="/dashboard/incomingRequests"
            disabled={disableRideWork}
            label="Incoming Requests"
            icon={<CarFront size={18} />}
            hint={
              disableRideWork
                ? "Go online to accept rides"
                : "View new ride offers"
            }
          />
          <ActionTile
            to="/dashboard/activeRide"
            disabled={disableRideWork}
            label="Active Ride"
            icon={<Activity size={18} />}
            hint={
              disableRideWork
                ? "Go online to manage rides"
                : "Manage current ride status"
            }
          />
          <ActionTile
            to="/dashboard/earnings"
            label="Earnings"
            icon={<HandCoins size={18} />}
            hint="Charts & breakdown"
          />
          <ActionTile
            to="/dashboard/history"
            label="Ride History"
            icon={<History size={18} />}
            hint="Past rides with filters"
          />
        </div>
      </div>

      {/* Active ride preview */}
      <div
        className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-slate-900">
            Current Ride
          </h3>
          <Link
            to="/dashboard/activeRide"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Open
          </Link>
        </div>

        {activeLoading ? (
          <div className="py-8 text-center text-slate-500">Loading…</div>
        ) : activeError ? (
          <div className="py-8 text-center text-red-600">
            Failed to fetch active ride
          </div>
        ) : !activeRide ? (
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600">
            No active ride at the moment.
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {activeRide.pickupLocation} → {activeRide.destination}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Created: {new Date(activeRide.createdAt).toLocaleString()}
                </p>
              </div>
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                {activeRide.status}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500 break-all">
              ID: {activeRide._id}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DriverDashboardPage;

/* ---------------- small UI helpers ---------------- */

function StatCard({
  title,
  value,
  note,
  loading,
  error,
  tone = "neutral",
}: {
  title: string;
  value: string;
  note?: string;
  loading?: boolean;
  error?: boolean;
  tone?: "neutral" | "good" | "bad";
}) {
  const ring =
    tone === "good"
      ? "ring-emerald-100"
      : tone === "bad"
      ? "ring-rose-100"
      : "ring-transparent";

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm ring-1 ${ring}`}
    >
      <div className="text-xs font-medium text-slate-500">{title}</div>
      {loading ? (
        <div className="mt-2 h-6 w-24 animate-pulse rounded bg-slate-100" />
      ) : error ? (
        <div className="mt-1 text-sm font-semibold text-rose-600">Failed</div>
      ) : (
        <div className="mt-1 text-xl font-bold text-slate-900">{value}</div>
      )}
      {note ? (
        <div className="mt-0.5 text-xs text-slate-500">{note}</div>
      ) : null}
    </div>
  );
}

function ActionTile({
  to,
  label,
  hint,
  icon,
  disabled,
}: {
  to: string;
  label: string;
  hint?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 opacity-70">
        <div className="flex items-center gap-2 text-slate-400">
          {icon} <span className="text-sm font-semibold">{label}</span>
        </div>
        {hint ? (
          <div className="mt-1 text-xs text-slate-400">{hint}</div>
        ) : null}
      </div>
    );
  }

  return (
    <Link
      to={to}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:bg-slate-50 transition-colors"
    >
      <div className="flex items-center gap-2 text-slate-800">
        {icon} <span className="text-sm font-semibold">{label}</span>
      </div>
      {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}
    </Link>
  );
}
