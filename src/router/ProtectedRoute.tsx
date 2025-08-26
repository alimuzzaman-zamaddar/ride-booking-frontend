/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetMeQuery } from "../redux/features/ride/profile.api";


export default function ProtectedRoute() {
  const location = useLocation();
  const token = localStorage.getItem("authToken");

  // Not logged in → go to login (preserve where we tried to go)
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Fetch current user profile to check status flags
  const { data, isLoading, error } = useGetMeQuery();

  if (isLoading) return null; // let parent show loader if needed
  if (error) {
    // token might be invalid/expired → force login
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  const me = data?.data;
  if (!me) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If blocked or suspended → dedicated status page
  if (me.isBlocked || me.isSuspended) {
    return (
      <Navigate
        to="/status"
        replace
        state={{
          reason: me.isBlocked ? "blocked" : "suspended",
        }}
      />
    );
  }

  // All good → render nested route
  return <Outlet />;
}
