// src/pages/Dashboard/Rider/RideHistory.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetRidesForRiderQuery } from "../../../redux/features/ride/ride.api";
import Loader from "../../../components/Loader/Loader";

export default function RideHistory() {
  const [filters, setFilters] = useState({
    status: "",
    startDate: "",
    endDate: "",
    minFare: "",
    maxFare: "",
  });
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, error } = useGetRidesForRiderQuery({
    page,
    pageSize,
    ...filters,
  });

  const rides = data?.rides ?? [];

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    setPage(1);
  };

  const handleReset = () => {
    setFilters({
      status: "",
      startDate: "",
      endDate: "",
      minFare: "",
      maxFare: "",
    });
    setPage(1);
  };

  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  if (error)
    return (
      <p className="p-4 text-red-600">
        {(error as any)?.data?.message || "Failed to load rides"}
      </p>
    );

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ride History
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Filter, search and review your past rides
            </p>
          </div>
          <div className="text-xs font-medium text-slate-500">
            Showing{" "}
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5">
              {rides.length}
            </span>{" "}
            item{rides.length === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div
        className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-6">
          {/* Status */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-500 mb-1">
              Status
            </label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="">All</option>
              <option value="requested">Requested</option>
              <option value="accepted">Accepted</option>
              <option value="in_transit">In Transit</option>
              <option value="completed">Completed</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-500 mb-1">
              Start date
            </label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* End Date */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-500 mb-1">
              End date
            </label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Min Fare */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-500 mb-1">
              Min fare
            </label>
            <input
              type="number"
              name="minFare"
              value={filters.minFare}
              onChange={handleFilterChange}
              placeholder="0"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Max Fare */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-500 mb-1">
              Max fare
            </label>
            <input
              type="number"
              name="maxFare"
              value={filters.maxFare}
              onChange={handleFilterChange}
              placeholder="1000"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Actions */}
          <div className="flex items-end gap-2">
            <button
              onClick={handleApplyFilters}
              className="flex-1 rounded-xl border border-slate-200 bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              Apply
            </button>
            <button
              onClick={handleReset}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Ride List */}
      {rides.length ? (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {rides.map(ride => (
            <RideCard key={ride._id} ride={ride} />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-10">
          <p className="text-sm text-slate-500">No rides found</p>
        </div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm text-slate-600">
          Page <b>{page}</b>
        </span>
        <button
          onClick={() => setPage(p => p + 1)}
          // if backend paginates: disable when fewer than pageSize were returned
          disabled={rides.length < pageSize}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function RideCard({
  ride,
}: {
  ride: {
    _id: string;
    pickupLocation: string;
    destination: string;
    status:
      | "requested"
      | "accepted"
      | "in_transit"
      | "completed"
      | "canceled"
      | string;
    rideCost: number;
    createdAt: string;
  };
}) {
  const badge = getStatusBadge(ride.status);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm ring-1 ring-transparent backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-100"
      style={{
        background:
          "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
      }}
    >
      {/* top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">
            {ride.pickupLocation} → {ride.destination}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {new Date(ride.createdAt).toLocaleString()}
          </p>
        </div>

        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.cls}`}
        >
          {badge.label}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <div className="text-slate-500">
          Fare{" "}
          <span className="font-semibold text-slate-900">
            {ride.rideCost ?? 0}
          </span>
        </div>

        <a
          href={`/dashboard/ride/${ride._id}`}
          className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          View details
        </a>
      </div>
    </div>
  );
}

function getStatusBadge(status: string) {
  switch (status) {
    case "requested":
      return {
        label: "Requested",
        cls: "bg-amber-100 text-amber-800",
      };
    case "accepted":
      return {
        label: "Accepted",
        cls: "bg-blue-100 text-blue-800",
      };
    case "in_transit":
      return {
        label: "In Transit",
        cls: "bg-indigo-100 text-indigo-800",
      };
    case "completed":
      return {
        label: "Completed",
        cls: "bg-emerald-100 text-emerald-800",
      };
    case "canceled":
      return {
        label: "Canceled",
        cls: "bg-rose-100 text-rose-800",
      };
    default:
      return { label: status, cls: "bg-slate-100 text-slate-700" };
  }
}
