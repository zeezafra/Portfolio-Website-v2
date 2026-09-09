export function AvailabilityBadge({
  isAvailable,
  label,
  className = "",
}: {
  isAvailable: boolean;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80 ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isAvailable ? "bg-accent-success" : "bg-accent-pending"
        }`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
