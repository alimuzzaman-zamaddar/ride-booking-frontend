/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/admin/UserDetails.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
import {
  useGetUserByIdQuery,
  useBlockUserMutation,
  useApproveDriverMutation,
} from "../../../redux/features/admin/admin.api";
import {
  ArrowLeft,
  Ban,
  CheckCircle2,
  ShieldAlert,
  User2,
  BadgeCheck,
  Activity,
} from "lucide-react";

export default function UserDetails() {
  const { id = "" } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetUserByIdQuery(id, { skip: !id });
 const [blockUser, { isLoading: isChanging }] = useBlockUserMutation();
   const [approveDriver, { isLoading: isApproving }] =
     useApproveDriverMutation();

  const user = data?.data;

  if (!id) return <p className="p-4 text-red-600">Invalid user id</p>;
  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  if (error) {
    const msg = (error as any)?.data?.message || "Failed to load user";
    return <p className="p-4 text-red-600">{msg}</p>;
  }
  if (!user) return <p className="p-4">User not found.</p>;

  const handleToggle = async () => {
    try {
      const res = await blockUser({
        userId: user._id,
        isBlocked: !user.isBlocked,
      }).unwrap();
      toast.success(res.message);
    } catch (e: any) {
      toast.error(e?.data?.message || "Update failed");
    }
 };
 
   const handleApprove = async () => {
     try {
       const res = await approveDriver(user._id).unwrap();
       toast.success(res.message || "Driver approved");
     } catch (e: any) {
       toast.error(e?.data?.message || "Approve failed");
     }
   };


  const rolePill =
    user.role === "admin"
      ? "bg-purple-100 text-purple-800"
      : user.role === "driver"
      ? "bg-blue-100 text-blue-800"
      : "bg-amber-100 text-amber-800";

  const StatChip = ({
    ok,
    label,
  }: {
    ok: boolean | undefined;
    label: string;
  }) => {
    const cls = ok
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-gray-50 text-gray-600 border-gray-200";
    const Icon = ok ? CheckCircle2 : ShieldAlert;
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${cls}`}
      >
        <Icon size={14} /> {label}: {ok ? "Yes" : "No"}
      </span>
    );
  };

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6">
      {/* header bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/dashboard/users"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={18} />
            Back to list
          </Link>
        </div>
      </div>

      {/* spotlight card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(147,197,253,0.08) 100%)",
        }}
      >
        {/* top gradient accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" />

        <div className="p-6 sm:p-8">
          {/* header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-inner">
                <User2 className="text-blue-600" size={26} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                    {user.email}
                  </h2>
                  {user.isApproved ? (
                    <BadgeCheck className="text-emerald-600" size={18} />
                  ) : null}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${rolePill}`}
                  >
                    {user.role}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <Activity size={14} />
                    ID:
                    <span className="truncate max-w-[180px] sm:max-w-[260px]">
                      {user._id}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Approve button (only for not-yet-approved drivers) */}
            {user.role === "driver" && !user.isApproved && (
              <button
                onClick={handleApprove}
                disabled={isApproving}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
              >
                {isApproving ? (
                  "Approving..."
                ) : (
                  <>
                    <BadgeCheck size={16} /> Approve Driver
                  </>
                )}
              </button>
            )}

            {/* action button */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggle}
                disabled={isChanging}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all ${
                  user.isBlocked
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-rose-600 hover:bg-rose-700"
                } disabled:bg-gray-400`}
              >
                {isChanging ? (
                  "Processing..."
                ) : user.isBlocked ? (
                  <>
                    <CheckCircle2 size={16} />
                    Unblock User
                  </>
                ) : (
                  <>
                    <Ban size={16} />
                    Block User
                  </>
                )}
              </button>
            </div>
          </div>

          {/* chips */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            <StatChip ok={user.isActive} label="Active" />
            <StatChip ok={!user.isDeleted} label="Not Deleted" />
            <StatChip ok={!user.isBlocked} label="Not Blocked" />
            <StatChip ok={user.isOnline} label="Online" />
            {"isApproved" in user && (
              <StatChip ok={!!user.isApproved} label="Approved" />
            )}
            {"isSuspended" in user && (
              <StatChip ok={!user.isSuspended} label="Not Suspended" />
            )}
          </div>

          {/* divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              k="Role"
              v={<span className="capitalize">{user.role}</span>}
            />
            <Field k="Created" v={new Date(user.createdAt).toLocaleString()} />
            <Field k="Updated" v={new Date(user.updatedAt).toLocaleString()} />
            <Field k="Cost" v={user.cost ?? 0} />
            <Field k="Earning" v={user.earning ?? 0} />
            {user.vehicleInfo ? (
              <Field k="Vehicle" v={user.vehicleInfo} />
            ) : null}
            {user.licenseNumber ? (
              <Field k="License" v={user.licenseNumber} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/** subtle field row with nicer typography */
function Field({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/60 backdrop-blur-[1px] px-4 py-3 shadow-sm">
      <div className="text-[11px] uppercase tracking-wide text-gray-500">
        {k}
      </div>
      <div className="mt-0.5 text-sm font-medium text-gray-900">{v}</div>
    </div>
  );
}
