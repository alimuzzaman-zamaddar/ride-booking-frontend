/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/RideRequest.tsx
import { useState } from "react";

import toast from "react-hot-toast";
import { useCreateRideRequestMutation } from "../../../redux/features/ride/ride.api";

export default function RideRequest() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");

  const [createRide, { isLoading, error, data }] =
    useCreateRideRequestMutation();

  const handleSubmit = async () => {
    try {
      if (!pickupLocation || !destination) {
        toast.error("Both pickup and destination are required");
        return;
      }

      const res = await createRide({ pickupLocation, destination }).unwrap();
      toast.success(res?.message ?? "Ride requested successfully");

      // optional: clear form
      setPickupLocation("");
      setDestination("");
      // optional: navigate(`/ride/${res.ride._id}`)
    } catch (e: any) {
      const msg =
        e?.data?.message || e?.message || "Failed to create ride request";
      toast.error(msg);
      console.error("create ride error:", e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-md border rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Request a Ride</h2>

        <div className="mb-3">
          <input
            value={pickupLocation}
            onChange={e => setPickupLocation(e.target.value)}
            placeholder="Pickup (e.g., dhaka)"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <input
            value={destination}
            onChange={e => setDestination(e.target.value)}
            placeholder="Destination (e.g., narail lahuriaa)"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full py-2 rounded bg-blue-600 text-white disabled:bg-gray-400"
        >
          {isLoading ? "Submitting..." : "Send Ride Request"}
        </button>

        {/* server error (defensive because RTKQ error shapes vary) */}
        {error ? (
          <p className="text-red-600 text-sm mt-3">
            {(error as any)?.data?.message || "Something went wrong"}
          </p>
        ) : null}

        {/* quick preview of success response */}
        {data ? (
          <div className="mt-4 text-sm">
            <p className="font-medium">{data.message}</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Ride ID: {data.ride._id}</li>
              <li>Status: {data.ride.status}</li>
              <li>
                {data.ride.pickupLocation} → {data.ride.destination}
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
