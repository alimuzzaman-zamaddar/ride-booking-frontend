/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, Link } from "react-router-dom";

export default function AccountStatus() {
  const location = useLocation() as any;
  const reason: "blocked" | "suspended" | undefined = location?.state?.reason;

  const headline =
    reason === "blocked"
      ? "Your account is blocked"
      : reason === "suspended"
      ? "Your account is suspended"
      : "Account access restricted";

  const message =
    reason === "blocked"
      ? "Your account has been blocked by the admin. If you believe this is a mistake, please contact support."
      : reason === "suspended"
      ? "Your account has been suspended by the admin. Please contact support to resolve this."
      : "Your account cannot access this area at the moment.";

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">{headline}</h1>
        <p className="mt-2 text-slate-600">{message}</p>

        <div className="mt-4 space-y-2 text-sm text-slate-600">
          <p>Email: support@goride.example</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to="/login"
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-black"
          >
            Back to Login
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 hover:bg-slate-50"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
