export function GpuWorkstation({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 140"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <rect x="58" y="18" width="104" height="104" rx="8" fill="currentColor" className="text-card" stroke="currentColor" strokeOpacity="0.2" />
      <rect x="68" y="28" width="84" height="54" rx="4" fill="currentColor" className="text-background" />
      <rect x="74" y="34" width="72" height="28" rx="2" fill="#1f2937" />
      <rect x="78" y="38" width="18" height="20" rx="1" fill="#334155" />
      <rect x="100" y="38" width="18" height="20" rx="1" fill="#334155" />
      <rect x="122" y="38" width="18" height="20" rx="1" fill="#475569" />
      <text x="110" y="72" textAnchor="middle" className="fill-muted-foreground" fontSize="7" fontFamily="ui-monospace, monospace">
        GPU
      </text>
      <rect x="74" y="90" width="28" height="6" rx="1" fill="currentColor" className="text-border" />
      <rect x="108" y="90" width="38" height="6" rx="1" fill="currentColor" className="text-border" />
      <rect x="74" y="102" width="72" height="8" rx="1" fill="currentColor" className="text-border" />
      <circle cx="150" cy="30" r="3.5" fill="#34d399" />
    </svg>
  );
}
