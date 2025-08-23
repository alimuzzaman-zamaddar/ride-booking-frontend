// src/pages/admin/UsersList.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import {
  useGetAllUsersQuery,
  type User,
} from "../../../redux/features/admin/admin.api";

export default function AllUser() {
  const { data, isLoading, error } = useGetAllUsersQuery();
  const users = data?.data ?? [];

  // 🔎 Search & Filters (client-side)
  const [q, setQ] = useState("");
  const [role, setRole] = useState<"" | "admin" | "driver" | "rider">("");
  const [onlyOnline, setOnlyOnline] = useState(false);
  const [onlyBlocked, setOnlyBlocked] = useState(false);
  const [onlySuspended, setOnlySuspended] = useState(false);
  const [onlyApproved, setOnlyApproved] = useState(false);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return users.filter(u => {
      // role filter
      if (role && u.role !== role) return false;
      // status filters
      if (onlyOnline && !u.isOnline) return false;
      if (onlyBlocked && !u.isBlocked) return false;
      if (onlySuspended && !u.isSuspended) return false;
      if (onlyApproved && !u.isApproved) return false;
      // search (email or id)
      if (!query) return true;
      const hay = `${u.email} ${u._id}`.toLowerCase();
      return hay.includes(query);
    });
  }, [users, q, role, onlyOnline, onlyBlocked, onlySuspended, onlyApproved]);

  // client-side pagination (on filtered list)
  const [page, setPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageUsers = useMemo(
    () => filtered.slice((page - 1) * pageSize, page * pageSize),
    [filtered, page]
  );

  // reset to first page whenever filters/search change
  // (simple inline effect substitute without useEffect)
  if (page > totalPages) {
    // quick guard to avoid empty page after filtering
    // (this is safe; React will re-render)
    // eslint-disable-next-line no-console
    setTimeout(() => setPage(1));
  }

  const clearFilters = () => {
    setQ("");
    setRole("");
    setOnlyOnline(false);
    setOnlyBlocked(false);
    setOnlySuspended(false);
    setOnlyApproved(false);
    setPage(1);
  };

  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;
  if (error) {
    const msg = (error as any)?.data?.message || "Failed to load users";
    return <p className="p-4 text-red-600">{msg}</p>;
  }
  if (!users.length) return <p className="p-4">No users found.</p>;

  return (
    <div className="py-8">
      {/* header */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            All Users
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage users across roles with quick details & actions
          </p>
        </div>
        <p className="text-xs font-medium text-slate-500">
          Total:{" "}
          <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5">
            {users.length}
          </span>
        </p>
      </div>

      {/* 🔎 Search & Filter toolbar */}
      <div className="mb-5 grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-600">Search</label>
          <input
            value={q}
            onChange={e => {
              setQ(e.target.value);
              setPage(1);
            }}
            placeholder="Search by email or ID…"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-600">Role</label>
          <select
            value={role}
            onChange={e => {
              setRole(e.target.value as typeof role);
              setPage(1);
            }}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All</option>
            <option value="admin">Admin</option>
            <option value="driver">Driver</option>
            <option value="rider">Rider</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-slate-600">
            Status Filters
          </label>
          <div className="flex flex-wrap gap-2">
            <ToggleChip
              checked={onlyOnline}
              onChange={setOnlyOnline}
              label="Online"
            />
            <ToggleChip
              checked={onlyBlocked}
              onChange={setOnlyBlocked}
              label="Blocked"
            />
            <ToggleChip
              checked={onlyApproved}
              onChange={setOnlyApproved}
              label="Approved"
            />
          </div>
        </div>

        <div className="flex items-end justify-start lg:justify-end">
          <button
            onClick={clearFilters}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            Clear
          </button>
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {pageUsers.map(u => (
          <UserCard key={u._id} user={u} />
        ))}
      </div>

      {/* pagination (uses filtered totals) */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm text-slate-600">
          Page <b>{page}</b> of <b>{totalPages}</b> — Showing{" "}
          <b>
            {pageUsers.length}/{filtered.length}
          </b>
        </span>
        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function ToggleChip({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition
        ${
          checked
            ? "border-blue-200 bg-blue-50 text-blue-700"
            : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
        }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          checked ? "bg-blue-500" : "bg-slate-400"
        }`}
      />
      {label}
    </button>
  );
}

function UserCard({ user }: { user: User }) {
  const roleColors: Record<User["role"], string> = {
    admin: "bg-purple-100 text-purple-800",
    driver: "bg-blue-100 text-blue-800",
    rider: "bg-amber-100 text-amber-800",
  };

  const Badge = ({ ok, label }: { ok?: boolean; label: string }) => {
    const cls = ok
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-slate-50 text-slate-600 border-slate-200";
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium ${cls}`}
      >
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            ok ? "bg-emerald-500" : "bg-slate-400"
          }`}
        />
        {label}: {ok ? "Yes" : "No"}
      </span>
    );
  };

  return (
    <div
      className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm ring-1 ring-transparent backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-100"
      style={{
        background:
          "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
      }}
    >
      {/* top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            {user.email}
          </p>
          <p className="mt-0.5 truncate text-xs text-slate-500 max-w-[240px]">
            {user._id}
          </p>
        </div>
        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            roleColors[user.role]
          }`}
        >
          {user.role}
        </span>
      </div>

      {/* status chips */}
      <div className="mt-1 flex flex-wrap gap-1.5">
        <Badge ok={user.isActive} label="Active" />
        <Badge ok={!user.isDeleted} label="Not Deleted" />
        <Badge ok={!user.isBlocked} label="Not Blocked" />
        <Badge ok={user.isOnline} label="Online" />
        {"isApproved" in user && (
          <Badge ok={!!user.isApproved} label="Approved" />
        )}
        {"isSuspended" in user && (
          <Badge ok={!user.isSuspended} label="Not Suspended" />
        )}
      </div>

      {/* footer actions */}
      <div className="pt-1">
        <Link
          to={`${user._id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          View
          <span className="ml-0.5 inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
