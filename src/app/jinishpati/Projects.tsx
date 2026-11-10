import { ArrowRight, BarChart3, CheckCircle2, Kanban, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX",
    thumb: "shop" as const,
  },
  {
    number: "02",
    title: "Task Management App",
    description: "Collaborative task management application",
    thumb: "tasks" as const,
  },
  {
    number: "03",
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard",
    thumb: "crypto" as const,
  },
];

function ShopThumb() {
  return (
    <div className="relative h-44 overflow-hidden bg-[radial-gradient(130%_130%_at_8%_0%,#5b54e8_0%,#2e2a74_42%,#0b1024_100%)]">
      <div className="bg-dot-grid absolute inset-0 opacity-20" />
      <div className="absolute inset-x-6 top-6 rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-white/50" />
          <span className="size-1.5 rounded-full bg-white/30" />
          <span className="size-1.5 rounded-full bg-white/20" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="flex h-14 flex-col justify-between rounded-lg bg-white/10 p-2"
            >
              <ShoppingBag className="size-4 text-white/70" />
              <div className="space-y-1">
                <div className="h-1 w-8 rounded-full bg-white/40" />
                <div className="h-1 w-5 rounded-full bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TasksThumb() {
  const columns = [
    { title: "Todo", items: ["Landing page", "API hooks"], highlight: false },
    { title: "Doing", items: ["Design system"], highlight: true },
    { title: "Done", items: ["Auth flow", "Setup"], highlight: false },
  ];

  return (
    <div className="relative h-44 overflow-hidden bg-[radial-gradient(130%_130%_at_90%_0%,#2c4b8f_0%,#161d3d_45%,#080d20_100%)]">
      <div className="bg-dot-grid absolute inset-0 opacity-20" />
      <div className="absolute inset-4 grid grid-cols-3 gap-2 transition-transform duration-500 group-hover:-translate-y-1">
        {columns.map((column) => (
          <div
            key={column.title}
            className="rounded-lg border border-white/10 bg-white/[0.06] p-2 backdrop-blur-md"
          >
            <div className="flex items-center gap-1">
              <Kanban className="size-3 text-white/50" />
              <span className="text-[8px] font-medium uppercase tracking-wider text-white/60">
                {column.title}
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              {column.items.map((item) => (
                <div
                  key={item}
                  className={`rounded-md border p-1.5 ${
                    column.highlight
                      ? "border-primary/40 bg-primary/20"
                      : "border-white/10 bg-white/[0.06]"
                  }`}
                >
                  <div className="h-1 w-9 rounded-full bg-white/50" />
                  <div className="mt-1 h-1 w-6 rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CryptoThumb() {
  return (
    <div className="relative h-44 overflow-hidden bg-[radial-gradient(130%_130%_at_20%_0%,#0f766e_0%,#12243d_45%,#070c1f_100%)]">
      <div className="bg-dot-grid absolute inset-0 opacity-15" />
      <div className="absolute inset-x-5 top-5 rounded-xl border border-white/15 bg-white/[0.07] p-3 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-full bg-emerald-400/20 text-emerald-300">
              <BarChart3 className="size-3.5" />
            </span>
            <div>
              <p className="text-[9px] font-medium text-white/80">BTC / USD</p>
              <p className="text-[8px] text-emerald-300">+4.28%</p>
            </div>
          </div>
          <CheckCircle2 className="size-4 text-white/40" />
        </div>
        <svg viewBox="0 0 220 64" className="mt-2 h-14 w-full" fill="none">
          <defs>
            <linearGradient id="crypto-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M2 54 L26 44 L48 49 L70 32 L94 38 L116 24 L140 30 L162 14 L186 20 L218 4 V64 H2 Z"
            fill="url(#crypto-fill)"
          />
          <path
            d="M2 54 L26 44 L48 49 L70 32 L94 38 L116 24 L140 30 L162 14 L186 20 L218 4"
            stroke="#34d399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function ProjectThumb({ variant }: { variant: "shop" | "tasks" | "crypto" }) {
  if (variant === "shop") return <ShopThumb />;
  if (variant === "tasks") return <TasksThumb />;
  return <CryptoThumb />;
}

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/5 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Some of My Recent Work"
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_80px_-40px_var(--primary)]"
            >
              <div className="relative">
                <ProjectThumb variant={project.thumb} />
                <span className="absolute left-4 top-4 rounded-md border border-white/15 bg-black/35 px-2 py-1 text-[10px] font-semibold tracking-widest text-white/80 backdrop-blur">
                  {project.number}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2" aria-hidden>
          <span className="h-2 w-6 rounded-full bg-primary" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
