/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Loader from "../../../components/Loader/Loader";
import {
  useChangePasswordMutation,
  useGetMeQuery,
  useUpdateMeMutation,
} from "../../../redux/features/ride/profile.api";

export default function Profile() {
  const { data, isLoading, error } = useGetMeQuery();
  const [updateMe, { isLoading: isUpdating }] = useUpdateMeMutation();
  const [changePassword, { isLoading: isChanging }] =
    useChangePasswordMutation();

  const me = data?.data;

  const [name, setName] = useState(me?.name ?? "");
  const [phone, setPhone] = useState(me?.phone ?? "");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  // hydrate form when me loads/changes
  useEffect(() => {
    if (me) {
      setName(me.name ?? "");
      setPhone(me.phone ?? "");
    }
  }, [me]);

  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;
  if (error) return <p className="p-4 text-red-600">Failed to load profile</p>;
  if (!me) return <p className="p-4">Profile not found</p>;

  const onSaveProfile = async () => {
    try {
      await updateMe({ name, phone }).unwrap();
      toast.success("Profile updated");
    } catch (e: any) {
      toast.error(e?.data?.message || "Update failed");
    }
  };

  const onChangePassword = async () => {
    if (!oldPassword || !newPassword) {
      toast.error("Both old and new password are required");
      return;
    }
    try {
      await changePassword({ oldPassword, newPassword }).unwrap();
      toast.success("Password changed");
      setOldPassword("");
      setNewPassword("");
      setShowOld(false);
      setShowNew(false);
    } catch (e: any) {
      toast.error(e?.data?.message || "Change password failed");
    }
  };

  // tiny inline eye icon (no external libs)
  const Eye = ({ open = false }: { open?: boolean }) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {open ? (
        <>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 3-3c0-.5-.1-1-.3-1.4" />
          <path d="M9.9 4.2A11.5 11.5 0 0 1 12 4c7 0 11 8 11 8a20.6 20.6 0 0 1-5.2 5.9" />
          <path d="M6.1 6.1A20.4 20.4 0 0 0 1 12s4 8 11 8c1 0 2-.1 2.9-.3" />
        </>
      )}
    </svg>
  );

  const PasswordInput = ({
    label,
    value,
    onChange,
    shown,
    onToggle,
    placeholder,
  }: {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    shown: boolean;
    onToggle: () => void;
    placeholder: string;
  }) => (
    <div>
      <label className="text-xs font-semibold text-slate-600">{label}</label>
      <div className="relative">
        <input
          type={shown ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="button"
          onClick={onToggle}
          aria-label={shown ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-2 my-auto inline-flex items-center justify-center rounded p-1 text-slate-500 hover:text-slate-700 focus:outline-none"
        >
          <Eye open={shown} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl py-6 px-4">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        My Profile
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Update your personal details and password
      </p>

      {/* Card: Profile Info */}
      <div
        className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-600">
              Email
            </label>
            <input
              value={me.email}
              disabled
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">Role</label>
            <input
              value={me.role}
              disabled
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 capitalize"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">
              Phone
            </label>
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Your phone"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={onSaveProfile}
            disabled={isUpdating}
            className="inline-flex items-center rounded-xl border border-slate-200 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Card: Change Password */}
      <div
        className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-transparent backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.9) 100%)",
        }}
      >
        <h3 className="text-lg font-semibold text-slate-900">
          Change Password
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <PasswordInput
            label="Old Password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            shown={showOld}
            onToggle={() => setShowOld(s => !s)}
            placeholder="Enter old password"
          />
          <PasswordInput
            label="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            shown={showNew}
            onToggle={() => setShowNew(s => !s)}
            placeholder="Enter new password"
          />
        </div>

        <div className="mt-5">
          <button
            onClick={onChangePassword}
            disabled={isChanging}
            className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black disabled:opacity-50"
          >
            {isChanging ? "Updating..." : "Update Password"}
          </button>
        </div>
      </div>
    </div>
  );
}
