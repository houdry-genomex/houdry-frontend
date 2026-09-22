type Tool = { name: string; src: string };

const TOOLS: Tool[] = [
  {
    "name": "React",
    "src": "/svg-houdry/react-svgrepo-com.svg"
  },
  {
    "name": "TypeScript",
    "src": "/svg-houdry/typescript-svgrepo-com.svg"
  },
  {
    "name": "Python",
    "src": "/svg-houdry/python-svgrepo-com.svg"
  },
  {
    "name": "Go",
    "src": "/svg-houdry/go-logo-blue.svg"
  },
  {
    "name": "Docker",
    "src": "/svg-houdry/docker-svgrepo-com.svg"
  },
  {
    "name": "Linux",
    "src": "/svg-houdry/linux-svgrepo-com.svg"
  },
  {
    "name": "CUDA",
    "src": "/svg-houdry/cuda-svgrepo-com.svg"
  },
  {
    "name": "Ollama",
    "src": "/svg-houdry/ollama-final.jpeg"
  },
  {
    "name": "OpenAI",
    "src": "/svg-houdry/openai-final.svg"
  },
  {
    "name": "Nous Research",
    "src": "/svg-houdry/nous-girl.66f8944c40c50f8c.svg"
  },
  {
    "name": "Tailwind CSS",
    "src": "/svg-houdry/tailwind-svgrepo-com.svg"
  },
  {
    "name": "Vite",
    "src": "/svg-houdry/vite-svgrepo-com.svg"
  }
];

function ToolMark({ tool }: { tool: Tool }) {
  return (
    <img
      src={tool.src}
      alt={tool.name}
      title={tool.name}
      className="h-10 w-10 shrink-0 object-contain"
      draggable="false"
    />
  );
}

// One full pass of the logos as an equal-width group with a trailing gap equal
// to the inner gap, so two groups tile seamlessly and translateX(-50%) lands
// exactly on the second group (no reset jump). The duplicate group is
// aria-hidden so screen readers meet each tool once.
function ToolGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className="tool-marquee__group flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10"
    >
      {TOOLS.map((tool) => (
        <li key={tool.name}>
          <ToolMark tool={tool} />
        </li>
      ))}
    </ul>
  );
}

export function TrustedBySection() {
  return (
    <section className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="mx-auto mb-12 max-w-3xl select-none px-4 text-3xl font-semibold text-foreground sm:px-8 sm:text-4xl lg:max-w-none lg:px-[30px] lg:text-5xl">
          Built on open tools you already trust.
        </h2>

        {/* Animated marquee: ~10 logos visible as they flow. Pauses on hover;
            reduced-motion users get the full static list below. */}
        <div className="tool-marquee group relative mx-auto w-full max-w-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] lg:max-w-5xl">
          <div className="tool-marquee__track flex w-max">
            <ToolGroup />
            <ToolGroup duplicate />
          </div>
        </div>

        {/* Reduced-motion fallback: every tool, wrapping, fully visible. */}
        <ul className="tool-static mx-auto hidden w-full max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-5 px-4 sm:gap-8">
          {TOOLS.map((tool) => (
            <li key={tool.name}>
              <ToolMark tool={tool} />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes tool-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tool-marquee__track {
          animation: tool-marquee-scroll 45s linear infinite;
          will-change: transform;
        }
        .tool-marquee:hover .tool-marquee__track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .tool-marquee { display: none; }
          .tool-static { display: flex; }
        }
      `}</style>
    </section>
  );
}
