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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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
    } catch (e: any) {
      toast.error(e?.data?.message || "Change password failed");
    }
  };

  return (
    <div className="mx-auto max-w-3xl py-6 px-4">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        My Profile
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Update your personal details and password
      </p>

      {/* Profile Card */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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
            className="inline-flex items-center rounded-xl border border-slate-200 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Password Card */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Change Password
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-600">
              Old Password
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              placeholder="Enter old password"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={onChangePassword}
            disabled={isChanging}
            className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black disabled:opacity-50"
          >
            {isChanging ? "Updating..." : "Update Password"}
          </button>
        </div>
      </div>
    </div>
  );
}
