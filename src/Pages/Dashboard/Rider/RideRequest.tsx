/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/Dashboard/Rider/RideRequest.tsx
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useCreateRideRequestMutation } from "../../../redux/features/ride/ride.api";
// If you already use lucide-react elsewhere, uncomment below for icons
// import { MapPin, Navigation, Shuffle, Loader2 } from "lucide-react";

export default function RideRequest() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");

  const [createRide, { isLoading, error, data }] =
    useCreateRideRequestMutation();

  // simple client-side estimate (you can replace with real distance-based calc)
  const estimate = useMemo(() => {
    if (!pickupLocation.trim() || !destination.trim()) return null;
    // fake estimate just for UX; your backend sets real fare anyway
    const base = 50;
    const variance =
      (pickupLocation.trim().length + destination.trim().length) % 20;
    return Math.max(35, base + variance);
  }, [pickupLocation, destination]);

  const canSubmit =
    !isLoading &&
    pickupLocation.trim().length >= 2 &&
    destination.trim().length >= 2 &&
    pickupLocation.trim().toLowerCase() !== destination.trim().toLowerCase();

  const handleSubmit = async () => {
    if (!canSubmit) {
      toast.error("Please fill valid pickup & destination");
      return;
    }
    try {
      const res = await createRide({
        pickupLocation: pickupLocation.trim(),
        destination: destination.trim(),
      }).unwrap();
      toast.success(res?.message ?? "Ride requested successfully");
      setPickupLocation("");
      setDestination("");
    } catch (e: any) {
      const msg =
        e?.data?.message || e?.message || "Failed to create ride request";
      toast.error(msg);
      console.error("create ride error:", e);
    }
  };

  const swap = () => {
    if (!pickupLocation && !destination) return;
    setPickupLocation(destination);
    setDestination(pickupLocation);
  };

  return (
    <div
      className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-slate-50 via-white to-slate-50"
      role="main"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Request a Ride
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Enter your pickup and destination to get started
          </p>
        </div>

        {/* Card */}
        <div
          className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-lg ring-1 ring-transparent backdrop-blur"
          style={{
            background:
              "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.95) 100%)",
          }}
        >
          {/* Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" />

          <div className="p-6 sm:p-8">
            {/* Inputs */}
            <div className="grid gap-4">
              {/* Pickup */}
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Pickup Location
                </span>
                <div className="relative">
                  {/* <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} /> */}
                  <input
                    value={pickupLocation}
                    onChange={e => setPickupLocation(e.target.value)}
                    placeholder="e.g. Dhaka"
                    aria-label="Pickup location"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                {pickupLocation && pickupLocation.trim().length < 2 ? (
                  <p className="mt-1 text-xs text-rose-600">
                    Please enter at least 2 characters
                  </p>
                ) : null}
              </label>

              {/* Swap */}
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={swap}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  aria-label="Swap pickup and destination"
                  title="Swap"
                >
                  {/* <Shuffle size={14} /> */}
                  Swap
                </button>
              </div>

              {/* Destination */}
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Destination
                </span>
                <div className="relative">
                  {/* <Navigation className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} /> */}
                  <input
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    placeholder="e.g. Narail"
                    aria-label="Destination"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                {destination && destination.trim().length < 2 ? (
                  <p className="mt-1 text-xs text-rose-600">
                    Please enter at least 2 characters
                  </p>
                ) : null}
              </label>
            </div>

            {/* Notice: same locations */}
            {pickupLocation &&
            destination &&
            pickupLocation.trim().toLowerCase() ===
              destination.trim().toLowerCase() ? (
              <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-800">
                Pickup and destination should be different.
              </div>
            ) : null}

            {/* Estimate */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  Estimated Fare
                </p>
                <p className="mt-0.5 text-lg font-bold text-slate-900">
                  {estimate ? `৳ ${estimate}` : "—"}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Final fare calculated by server
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  Status
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-900">
                  {isLoading ? "Submitting request…" : "Ready"}
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition
                ${
                  canSubmit
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-slate-400 cursor-not-allowed"
                }`}
              >
                {/* {isLoading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="animate-spin" size={16} />
                    Submitting…
                  </span>
                ) : (
                  "Send Ride Request"
                )} */}
                {isLoading ? "Submitting…" : "Send Ride Request"}
              </button>

              {/* Server Error */}
              {error ? (
                <p className="mt-3 text-xs text-rose-600">
                  {(error as any)?.data?.message || "Something went wrong"}
                </p>
              ) : null}
            </div>

            {/* Success preview */}
            {data ? (
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                <p className="font-semibold">{data.message}</p>
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    Route: <b>{data.ride.pickupLocation}</b> →{" "}
                    <b>{data.ride.destination}</b>
                  </li>
                  <li>Status: {data.ride.status}</li>
                  <li>Ride ID: {data.ride._id}</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Helper footer note */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-slate-500">
          Tip: You can edit your profile and saved info from the Profile page.
        </p>
      </div>
    </div>
  );
}
