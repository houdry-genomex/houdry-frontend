export function AOLogo({
  className = "h-7 w-auto sm:h-8",
}: {
  className?: string;
}) {
  return (
    <img
      src="/houdry-logo.png"
      alt="Houdry"
      width={240}
      height={48}
      className={`object-contain mix-blend-lighten ${className}`}
    />
  );
}
