/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import toast from "react-hot-toast";
import { useGoOnlineMutation } from "../../../redux/features/driver/driver.api";

export default function GoOnline({ driverId }: { driverId: string }) {
  const [goOnline, { isLoading }] = useGoOnlineMutation();
  const [busy, setBusy] = useState(false);

  const handleGoOnline = async () => {
    try {
      setBusy(true);
      const res = await goOnline(driverId).unwrap();
      toast.success(res?.message || "Driver is now online");
    } catch (e: any) {
      toast.error(e?.data?.message || "Failed to go online");
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      onClick={handleGoOnline}
      disabled={isLoading || busy}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
    >
      {isLoading || busy ? "Going Online..." : "Go Online"}
    </button>
  );
}
