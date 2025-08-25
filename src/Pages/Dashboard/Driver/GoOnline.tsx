/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useGetMeQuery } from "../../../redux/features/ride/profile.api"; // you already have this
import { useGoOfflineMutation, useGoOnlineMutation } from "../../../redux/features/driver/driver.api";

export default function GoOnline() {
  const {
    data,
    isLoading: meLoading,
    error: meError,
    refetch,
  } = useGetMeQuery();
  const [goOnline, { isLoading: onlining }] = useGoOnlineMutation();
  const [goOffline, { isLoading: offlining }] = useGoOfflineMutation();

  const me = data?.data;
  const [isOnline, setIsOnline] = useState<boolean>(!!me?.isOnline);

  useEffect(() => {
    if (me) setIsOnline(!!me.isOnline);
  }, [me]);

  if (meLoading) return <div className="p-6">Loading...</div>;
  if (meError)
    return <div className="p-6 text-red-600">Failed to load profile</div>;
  if (!me) return <div className="p-6">Profile not found</div>;

  const disabledReason = me.isBlocked
    ? "Your account is blocked. Contact support."
    : me.isSuspended
    ? "Your account is suspended. Contact support."
    : me.role !== "driver"
    ? "Only drivers can toggle availability."
    : me.isApproved === false
    ? "Awaiting admin approval."
    : "";

  const canToggle = !disabledReason;

  const handleToggle = async () => {
    try {
      if (isOnline) {
        const res = await goOffline().unwrap();
        toast.success(res.message || "You're now offline");
        setIsOnline(false);
      } else {
        const res = await goOnline().unwrap();
        toast.success(res.message || "You're now online");
        setIsOnline(true);
      }
      // refresh me to sync flags
      refetch();
    } catch (e: any) {
      toast.error(e?.data?.message || e?.message || "Action failed");
    }
  };

  return (
    <div className="mx-auto max-w-xl py-8 px-5">
      <div
        className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        <h2 className="text-xl font-bold text-slate-900">Availability</h2>
        <p className="mt-1 text-sm text-slate-500">
          Toggle your online/offline status to start or stop receiving rides.
        </p>

        {/* Status banner */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Current Status</span>
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                isOnline
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>

        {/* Restrictions */}
        {disabledReason ? (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {disabledReason}
          </div>
        ) : null}

        {/* Toggle */}
        <div className="mt-6">
          <button
            onClick={handleToggle}
            disabled={!canToggle || onlining || offlining}
            className={`w-full rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors
              ${
                isOnline
                  ? "bg-slate-800 hover:bg-black"
                  : "bg-blue-600 hover:bg-blue-700"
              }
              ${
                !canToggle || onlining || offlining
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }
            `}
          >
            {onlining || offlining
              ? "Updating..."
              : isOnline
              ? "Go Offline"
              : "Go Online"}
          </button>

          <p className="mt-3 text-xs text-slate-500">
            When you’re offline, you can still browse your dashboard, but won’t
            receive new ride requests.
          </p>
        </div>
      </div>
    </div>
  );
}
