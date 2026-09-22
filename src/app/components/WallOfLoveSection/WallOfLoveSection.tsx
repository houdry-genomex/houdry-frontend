import { HardHat, Quote } from "lucide-react";

const STORIES = [
  { role: "Process engineer", unit: "Crude distillation", quote: "Give me a first draft grounded in our operating procedures, with the references beside it. I can spend my time reviewing the engineering." },
  { role: "Inspection engineer", unit: "Asset integrity", quote: "From inspection notes to an approval draft, the useful part is keeping the findings and supporting documents together." },
  { role: "Maintenance engineer", unit: "Rotating equipment", quote: "When a pump needs attention, I want the relevant manual and previous maintenance notes in one place, ready for review." },
  { role: "Instrumentation engineer", unit: "Controls & instrumentation", quote: "Turning drawing tags into a register would save the repetitive work, while leaving every entry open for an engineer to check." },
  { role: "Operations engineer", unit: "Refinery operations", quote: "A clear shift handover starts with the right context: our logs, our procedures, and the issues the next team needs to see." },
  { role: "Project engineer", unit: "Turnarounds & projects", quote: "I want help organizing vendor documents and drafting technical notes, with confidential refinery material staying on site." },
];

function StoryGroup({ stories, duplicate = false }: { stories: typeof STORIES; duplicate?: boolean }) {
  return (
    <div aria-hidden={duplicate || undefined} className="refinery-stories__group flex shrink-0 gap-4 pr-4">
      {stories.map((story) => (
        <figure key={story.role} className="flex w-[min(82vw,380px)] flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <Quote aria-hidden="true" className="size-6 text-foreground/35" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sample testimonial</span>
          </div>
          <blockquote className="mb-7 flex-1 text-base leading-7 text-foreground/90">&ldquo;{story.quote}&rdquo;</blockquote>
          <figcaption className="flex items-center gap-3 border-t border-border pt-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted"><HardHat aria-hidden="true" className="size-5 text-foreground/70" /></span>
            <div><p className="text-sm font-semibold">{story.role}</p><p className="mt-1 text-xs text-muted-foreground">Oil refining &middot; {story.unit}</p></div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function WallOfLoveSection() {
  return (
    <section id="testimonials" aria-labelledby="refinery-stories-heading" className="overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-end justify-between gap-6 px-4 sm:px-8 lg:px-[30px]">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">From the refinery floor</p>
          <h2 id="refinery-stories-heading" className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Testimonials</h2>
          <p className="mt-3 text-base text-muted-foreground">Illustrative engineer perspectives. These sample testimonials are not customer endorsements.</p>
        </div>
      </div>
      <div className="refinery-stories space-y-4">
        {[STORIES.slice(0, 3), STORIES.slice(3)].map((stories, index) => (
          <div key={index} className="refinery-stories__row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
            <div className="refinery-stories__track flex w-max" style={{ animationDirection: index === 0 ? "normal" : "reverse" }}>
              <StoryGroup stories={stories} /><StoryGroup stories={stories} duplicate />
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes refinery-stories-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .refinery-stories__track { animation: refinery-stories-scroll 42s linear infinite; }
        .refinery-stories:hover .refinery-stories__track { animation-play-state: paused; }
        @media (min-width: 1280px) { .refinery-stories__group figure { width: max(380px, 34vw); } }
        @media (prefers-reduced-motion: reduce) {
          .refinery-stories__row { mask-image: none; }
          .refinery-stories__track { animation: none; width: 100%; }
          .refinery-stories__group { width: 100%; flex-wrap: wrap; justify-content: center; padding: 0 16px; }
          .refinery-stories__group[aria-hidden="true"] { display: none; }
        }
      `}</style>
    </section>
  );
}
