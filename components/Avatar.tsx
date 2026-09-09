// Placeholder avatar (initials in a circle) since no photo has been
// uploaded yet. To swap in a real one later:
//   1. Add the file at public/images/avatar.jpg
//   2. Replace this component's contents with:
//        <Image src="/images/avatar.jpg" alt={name} width={size} height={size}
//               className="rounded-full object-cover" />
//   3. Delete the initials fallback below (or keep it as an alt/error state).

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Avatar({
  name,
  size = 48,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground ${className}`}
    >
      <span style={{ fontSize: size * 0.38 }}>{initials(name)}</span>
    </div>
  );
}
