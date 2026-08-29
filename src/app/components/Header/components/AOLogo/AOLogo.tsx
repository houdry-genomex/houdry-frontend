export function AOLogo() {
  return (
    <span
      aria-label="Houdry"
      className="inline-flex items-center gap-2 font-sans text-base font-medium leading-none tracking-[-0.5px] text-foreground"
    >
      <img
        src="/logo.png"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
        className="size-5 shrink-0 rounded object-contain"
      />
      <span>Houdry</span>
    </span>
  );
}
