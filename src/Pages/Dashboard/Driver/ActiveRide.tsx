/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import {
  useDriverUpdateRideStatusMutation,
  useGetActiveRideQuery,
} from "../../../redux/features/driver/driver.api";
import Loader from "../../../components/Loader/Loader";

export default function ActiveRide() {
  const { data, isLoading, error, refetch } = useGetActiveRideQuery();
  const [updateStatus, { isLoading: isUpdating }] =
    useDriverUpdateRideStatusMutation();

  type RideStatus =
    | "requested"
    | "accepted"
    | "picked_up"
    | "in_transit"
    | "completed"
    | "canceled"
    | "ongoing"
    | "cancelled";

  type Ride = {
    _id: string;
    pickupLocation: string;
    destination: string;
    createdAt: string;
    updatedAt?: string;
    status: RideStatus;
    rideCost?: number;
  };

  const ride: Ride | null = data?.ride ?? null;

  const doUpdate = async (
    status: "picked_up" | "in_transit" | "completed" | "canceled"
  ) => {
    if (!ride) return;
    try {
      const res = await updateStatus({ rideId: ride._id, status }).unwrap();
      toast.success(res.message || "Ride updated");
      refetch();
    } catch (e: any) {
      toast.error(e?.data?.message || "Failed to update");
    }
  };

  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  if (error)
    return (
      <div className="mx-auto max-w-3xl p-4">
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-800">
          Failed to load active ride
        </div>
      </div>
    );

  const statusBadge = getStatusBadge(ride?.status ?? "requested");
  const steps = [
    { key: "accepted", label: "Accepted" },
    { key: "picked_up", label: "Picked up" },
    { key: "in_transit", label: "In transit" },
    { key: "completed", label: "Completed" },
  ] as const;

  const currentIndex = steps.findIndex(s => s.key === ride?.status);

  return (
    <div className="mx-auto max-w-3xl py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Active Ride
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage your current trip and update its status
        </p>
      </div>

      {!ride ? (
        <EmptyCard />
      ) : (
        <div
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm ring-1 ring-transparent backdrop-blur"
          style={{
            background:
              "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.95) 100%)",
          }}
        >
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" />

          <div className="p-5 sm:p-6">
            {/* Top Row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                  {ride.pickupLocation} → {ride.destination}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Created: {new Date(ride.createdAt).toLocaleString()}
                </p>
                {ride.updatedAt ? (
                  <p className="text-xs text-slate-500">
                    Updated: {new Date(ride.updatedAt).toLocaleString()}
                  </p>
                ) : null}
                <p className="mt-1 text-[11px] text-slate-400 truncate">
                  ID: {ride._id}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusBadge.cls}`}
                >
                  {statusBadge.label}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                  Fare: {ride.rideCost ?? 0}
                </span>
              </div>
            </div>

            {/* Timeline / Progress */}
            <div className="mt-5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Progress
              </div>
              <div className="relative">
                <div className="h-2 w-full rounded-full bg-slate-100" />
                <div
                  className="absolute left-0 top-0 h-2 rounded-full bg-slate-900/80 transition-all"
                  style={{
                    width: progressWidth(ride.status),
                  }}
                />
              </div>

              <div className="mt-2 grid grid-cols-4 text-[11px] text-slate-500">
                {steps.map((s, i) => (
                  <div
                    key={s.key}
                    className={`text-center ${
                      i <= currentIndex ? "text-slate-900 font-medium" : ""
                    }`}
                  >
                    {s.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {/* accepted → picked_up or canceled */}
              {ride.status === "accepted" && (
                <>
                  <PrimaryButton
                    onClick={() => doUpdate("picked_up")}
                    loading={isUpdating}
                    label="Picked Up"
                    tone="emerald"
                  />
                  <GhostButton
                    onClick={() => doUpdate("canceled")}
                    loading={isUpdating}
                    label="Cancel"
                  />
                </>
              )}

              {/* picked_up → in_transit or canceled */}
              {ride.status === "picked_up" && (
                <>
                  <PrimaryButton
                    onClick={() => doUpdate("in_transit")}
                    loading={isUpdating}
                    label="Start Trip"
                    tone="indigo"
                  />
                  <GhostButton
                    onClick={() => doUpdate("canceled")}
                    loading={isUpdating}
                    label="Cancel"
                  />
                </>
              )}

              {/* in_transit → completed */}
              {ride.status === "in_transit" && (
                <PrimaryButton
                  onClick={() => doUpdate("completed")}
                  loading={isUpdating}
                  label="Complete Ride"
                  tone="blue"
                  full
                />
              )}
            </div>

            {/* (Optional) Map placeholder */}
            <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
              Live map coming soon…
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- UI bits ---------- */

function EmptyCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
      No active ride right now.
    </div>
  );
}

function PrimaryButton({
  onClick,
  loading,
  label,
  tone = "blue",
  full = false,
}: {
  onClick: () => void;
  loading: boolean;
  label: string;
  tone?: "blue" | "indigo" | "emerald";
  full?: boolean;
}) {
  const toneMap = {
    blue: "bg-blue-600 hover:bg-blue-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    emerald: "bg-emerald-600 hover:bg-emerald-700",
  }[tone];

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`${
        full ? "col-span-1 sm:col-span-2" : ""
      } rounded-xl ${toneMap} px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:opacity-50`}
    >
      {loading ? "Updating..." : label}
    </button>
  );
}

function GhostButton({
  onClick,
  loading,
  label,
}: {
  onClick: () => void;
  loading: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 disabled:opacity-50"
    >
      {loading ? "Updating..." : label}
    </button>
  );
}

function getStatusBadge(status: string) {
  switch (status) {
    case "requested":
      return { label: "Requested", cls: "bg-amber-100 text-amber-800" };
    case "accepted":
      return { label: "Accepted", cls: "bg-blue-100 text-blue-800" };
    case "picked_up":
      return { label: "Picked Up", cls: "bg-sky-100 text-sky-800" };
    case "in_transit":
      return { label: "In Transit", cls: "bg-indigo-100 text-indigo-800" };
    case "completed":
      return { label: "Completed", cls: "bg-emerald-100 text-emerald-800" };
    case "canceled":
      return { label: "Canceled", cls: "bg-rose-100 text-rose-800" };
    default:
      return { label: status, cls: "bg-slate-100 text-slate-700" };
  }
}

function progressWidth(status?: string) {
  switch (status) {
    case "accepted":
      return "25%";
    case "picked_up":
      return "50%";
    case "in_transit":
      return "75%";
    case "completed":
      return "100%";
    default:
      return "0%";
  }
}
