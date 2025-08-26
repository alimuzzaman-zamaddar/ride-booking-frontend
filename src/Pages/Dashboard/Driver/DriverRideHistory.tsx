/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetDriverRideHistoryQuery } from "../../../redux/features/driver/driver.api";

export default function DriverRideHistory() {
  const [filters, setFilters] = useState({
    status: "",
    startDate: "",
    endDate: "",
    minFare: "",
    maxFare: "",
  });
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const { data, isLoading, error, refetch } = useGetDriverRideHistoryQuery({
    page,
    pageSize,
    status: filters.status || undefined,
    startDate: filters.startDate || undefined,
    endDate: filters.endDate || undefined,
    minFare: filters.minFare ? Number(filters.minFare) : undefined,
    maxFare: filters.maxFare ? Number(filters.maxFare) : undefined,
  });

  const items = data?.data?.items ?? [];
  const pagination = data?.data?.pagination;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const apply = () => {
    setPage(1);
    refetch();
  };

  return (
    <div className="mx-auto max-w-6xl py-8 px-5">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Ride History
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Filter and browse your past rides.
        </p>
      </div>

      {/* Filters */}
      <div
        className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
          <select
            name="status"
            value={filters.status}
            onChange={onChange}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="">All Status</option>
            <option value="requested">Requested</option>
            <option value="accepted">Accepted</option>
            <option value="picked_up">Picked Up</option>
            <option value="in_transit">In Transit</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>

          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={onChange}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={onChange}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
          <input
            type="number"
            name="minFare"
            value={filters.minFare}
            onChange={onChange}
            placeholder="Min Fare"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
          <input
            type="number"
            name="maxFare"
            value={filters.maxFare}
            onChange={onChange}
            placeholder="Max Fare"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />

          <button
            onClick={apply}
            className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            Apply
          </button>
        </div>
      </div>

      {/* List */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <div className="col-span-full py-10 text-center text-slate-500">
            Loading...
          </div>
        ) : error ? (
          <div className="col-span-full py-10 text-center text-red-600">
            Failed to load rides
          </div>
        ) : items.length === 0 ? (
          <div className="col-span-full rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600">
            No rides found
          </div>
        ) : (
          items.map(r => (
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
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {r.pickupLocation} → {r.destination}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {new Date(r.createdAt).toLocaleString()}
                  </p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                  {r.status}
                </span>
              </div>

              <div className="mt-1 grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div>
                  <span className="font-medium text-slate-700">Fare: </span>$
                  {r.rideCost ?? 0}
                </div>
                <div>
                  <span className="font-medium text-slate-700">Earnings: </span>
                  ${r.earnings ?? 0}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm text-slate-600">
            Page <b>{pagination.page}</b> of <b>{pagination.totalPages}</b>
          </span>
          <button
            onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
            disabled={page === pagination.totalPages}
            className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
