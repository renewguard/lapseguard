export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-600 [animation-delay:-0.3s]" />
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-600 [animation-delay:-0.15s]" />
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-600" />
      </div>
    </div>
  );
}
