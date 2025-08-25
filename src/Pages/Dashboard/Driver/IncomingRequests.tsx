/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAcceptRideMutation, useGetOpenRequestsQuery, useRejectRideMutation } from "../../../redux/features/driver/driver.api";
import { useGetMeQuery } from "../../../redux/features/ride/profile.api";
import toast from "react-hot-toast";

export default function IncomingRequests() {
  const { data: meData } = useGetMeQuery();
  const me = meData?.data;

  const { data, isLoading, error, refetch } = useGetOpenRequestsQuery();
  const [acceptRide, { isLoading: isAccepting }] = useAcceptRideMutation();
  const [rejectRide, { isLoading: isRejecting }] = useRejectRideMutation();

  const rides = data?.rides ?? [];

  const disabledBanner =
    me?.role !== "driver"
      ? "Only drivers can accept or reject requests."
      : me?.isBlocked
      ? "Your account is blocked. Contact support."
      : me?.isSuspended
      ? "Your account is suspended. Contact support."
      : me?.isApproved === false
      ? "Waiting for admin approval."
      : !me?.isOnline
      ? "You are offline. Go online to receive requests."
      : "";

  const canAct = !disabledBanner;

  const onAccept = async (id: string) => {
    try {
      const res = await acceptRide(id).unwrap();
      toast.success(res.message || "Ride accepted");
      refetch();
    } catch (e: any) {
      toast.error(e?.data?.message || e?.message || "Accept failed");
    }
  };

  const onReject = async (id: string) => {
    try {
      const res = await rejectRide(id).unwrap();
      toast.success(res.message || "Ride rejected");
      refetch();
    } catch (e: any) {
      toast.error(e?.data?.message || e?.message || "Reject failed");
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error)
    return <div className="p-6 text-red-600">Failed to load requests</div>;

  return (
    <div className="mx-auto max-w-6xl py-8 px-5">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Incoming Requests</h2>
        <p className="mt-1 text-sm text-slate-500">
          New unassigned rides. Go online to accept.
        </p>
      </div>

      {disabledBanner ? (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {disabledBanner}
        </div>
      ) : null}

      {rides.length ? (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rides.map(r => (
            <div
              key={r._id}
              className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm ring-1 ring-transparent backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
              }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    {r.pickupLocation} → {r.destination}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {new Date(r.createdAt).toLocaleString()}
                  </p>
                </div>
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                  {r.status}
                </span>
              </div>

              <div className="mt-1 text-xs text-slate-500">
                Ride ID: <span className="font-mono">{r._id}</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onAccept(r._id)}
                  disabled={!canAct || isAccepting}
                  className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isAccepting ? "Accepting..." : "Accept"}
                </button>
                <button
                  onClick={() => onReject(r._id)}
                  disabled={!canAct || isRejecting}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isRejecting ? "Rejecting..." : "Reject"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-600">
          No incoming requests right now.
        </p>
      )}
    </div>
  );
}
