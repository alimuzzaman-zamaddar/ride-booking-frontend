/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from "react-router-dom";
import { useGetRideByIdQuery } from "../../../redux/features/ride/ride.api";
import Loader from "../../../components/Loader/Loader";

export default function RideDetails() {
  const { id = "" } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetRideByIdQuery(id, { skip: !id });
  const ride = data?.ride;

  if (!id) return <p className="p-4 text-red-600">Invalid ride id</p>;
  if (isLoading) return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  if (error) {
    const msg = (error as any)?.data?.message || "Failed to load ride";
    return <p className="p-4 text-red-600">{msg}</p>;
  }
  if (!ride) return <p className="p-4">Ride not found.</p>;

  const badge = getStatusBadge(ride.status);

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Ride Details
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Track every step of your trip
          </p>
        </div>
        <Link
          to="/dashboard/history"
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          Back to history
        </Link>
      </div>

      <div
        className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        {/* Top row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900">
              {ride.pickupLocation} → {ride.destination}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Created: {new Date(ride.createdAt).toLocaleString()}
            </p>
            <p className="text-xs text-slate-500">
              Updated: {new Date(ride.updatedAt).toLocaleString()}
            </p>
            <p className="mt-1 text-[11px] text-slate-400 truncate">
              ID: {ride._id}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.cls}`}
            >
              {badge.label}
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
              Fare: {ride.rideCost ?? 0}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-slate-800">
            Status timeline
          </h3>
          <ol className="relative ms-3 border-s-l border-slate-200">
            {timelineFromStatus(ride.status).map((step, i) => (
              <li key={i} className="mb-6 ms-6">
                <span
                  className={`absolute -start-3 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white ${step.dot}`}
                />
                <h4 className="text-sm font-semibold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500">{step.hint}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Driver (optional) */}
        {ride?.riderId || ride?.driverId ? (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <InfoCard label="Rider ID" value={String(ride.riderId)} />
            <InfoCard
              label="Driver ID"
              value={ride.driverId ? String(ride.driverId) : "—"}
            />
          </div>
        ) : null}

        {/* (Optional) Static map placeholder */}
        <div className="mt-6">
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
            Map preview coming soon (optional)
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900 break-all">{value}</p>
    </div>
  );
}

function getStatusBadge(status: string) {
  switch (status) {
    case "requested":
      return { label: "Requested", cls: "bg-amber-100 text-amber-800" };
    case "accepted":
      return { label: "Accepted", cls: "bg-blue-100 text-blue-800" };
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

function timelineFromStatus(status: string) {
  const steps = [
    { key: "requested", title: "Ride requested", hint: "We’re finding a driver", dot: "bg-amber-400" },
    { key: "accepted", title: "Driver accepted", hint: "Driver is en route", dot: "bg-blue-400" },
    { key: "in_transit", title: "In transit", hint: "Ride in progress", dot: "bg-indigo-400" },
    { key: "completed", title: "Completed", hint: "Trip finished", dot: "bg-emerald-500" },
    { key: "canceled", title: "Canceled", hint: "This ride was canceled", dot: "bg-rose-500" },
  ];
  // show up to the current state
  const index = steps.findIndex(s => s.key === status);
  if (index === -1) return steps.slice(0, 1);
  return steps.slice(0, index + 1);
}
