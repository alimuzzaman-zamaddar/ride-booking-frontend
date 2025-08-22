/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/MyRides.tsx
import { useState } from "react";
import Loader from "../../../components/Loader/Loader";
import {
 useCancelRideMutation,
  useGetMyRidesQuery,

} from "../../../redux/features/ride/ride.api";
import toast from "react-hot-toast";

export default function MyRides() {
  const { data, isLoading, error } = useGetMyRidesQuery();
  const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation();
  const [busyId, setBusyId] = useState<string | null>(null);

  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  if (error)
    return (
      <p className="p-4 text-red-600">
        {(error as any)?.data?.message || "Failed to load rides"}
      </p>
    );

  if (!data?.rides?.length) return <p className="p-4">No rides found.</p>;

  const onCancel = async (rideId: string) => {
    try {
      setBusyId(rideId);
      const res = await cancelRide(rideId).unwrap();
      // backend now returns status "canceled"
      toast.success(res?.message || "Ride canceled");
    } catch (e: any) {
      const msg = e?.data?.message || e?.message || "Failed to cancel ride";
      toast.error(msg);
      console.error("cancel ride error:", e);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h2 className="text-xl font-bold mb-4">My Rides</h2>
      <ul className="space-y-4">
        {data.rides.map(ride => (
          <li
            key={ride._id}
            className="border rounded-md p-4 shadow-sm bg-white"
          >
            <p>
              <span className="font-semibold">Pickup:</span>{" "}
              {ride.pickupLocation}
            </p>
            <p>
              <span className="font-semibold">Destination:</span>{" "}
              {ride.destination}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {ride.status}
            </p>
            <p>
              <span className="font-semibold">Created At:</span>{" "}
              {new Date(ride.createdAt).toLocaleString()}
            </p>

            {/* Only show Cancel while it's still "requested" */}
            {ride.status === "requested" && (
              <button
                onClick={() => onCancel(ride._id)}
                disabled={isCancelling && busyId === ride._id}
                className="mt-3 inline-flex items-center rounded bg-red-600 text-white px-3 py-2 disabled:bg-gray-400"
              >
                {isCancelling && busyId === ride._id
                  ? "Cancelling..."
                  : "Cancel"}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
