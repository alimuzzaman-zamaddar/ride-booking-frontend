type Props = { isOnline?: boolean };

export default function OfflineBanner({ isOnline }: Props) {
  if (isOnline) return null;
  return (
    <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
      You&apos;re currently <b>Offline</b>. You can browse your dashboard, but
      won’t receive new ride requests. Use the toggle to go online and start
      accepting rides.
    </div>
  );
}
