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

  // ✅ Match backend status names
  type RideStatus =
    | "requested"
    | "accepted"
    | "picked_up"
    | "in_transit"
    | "completed"
    | "canceled";

  type Ride = {
    _id: string;
    pickupLocation: string;
    destination: string;
    createdAt: string;
    status: RideStatus;
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
    return <p className="p-4 text-red-600">Failed to load active ride</p>;

  return (
    <div className="mx-auto max-w-3xl py-6 px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Active Ride
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage your current ride’s status
        </p>
      </div>

      {!ride ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
          No active ride right now.
        </div>
      ) : (
        <div
          className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900">
                {ride.pickupLocation} → {ride.destination}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Created: {new Date(ride.createdAt).toLocaleString()}
              </p>
            </div>
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              {ride.status}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {/* accepted → picked_up or canceled */}
            {ride.status === "accepted" && (
              <>
                <button
                  onClick={() => doUpdate("picked_up")}
                  disabled={isUpdating}
                  className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-50"
                >
                  {isUpdating ? "Updating..." : "Picked Up"}
                </button>
                <button
                  onClick={() => doUpdate("canceled")}
                  disabled={isUpdating}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-50"
                >
                  {isUpdating ? "Updating..." : "Cancel"}
                </button>
              </>
            )}

            {/* picked_up → in_transit or canceled */}
            {ride.status === "picked_up" && (
              <>
                <button
                  onClick={() => doUpdate("in_transit")}
                  disabled={isUpdating}
                  className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isUpdating ? "Updating..." : "Start Trip"}
                </button>
                <button
                  onClick={() => doUpdate("canceled")}
                  disabled={isUpdating}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-50"
                >
                  {isUpdating ? "Updating..." : "Cancel"}
                </button>
              </>
            )}

            {/* in_transit → completed */}
            {ride.status === "in_transit" && (
              <button
                onClick={() => doUpdate("completed")}
                disabled={isUpdating}
                className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
              >
                {isUpdating ? "Updating..." : "Complete Ride"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
