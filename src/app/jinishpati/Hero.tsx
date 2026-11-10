import Image from "next/image";
import { ArrowRight, Code2, Download } from "lucide-react";
import { BrandIcon, brandIconColor } from "@/components/brand-icon";
import { ActionLink } from "@/components/action-link";
import {
  siCss,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const tech = [
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-14 sm:pb-16 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/[0.07] to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            I&apos;m a web developer
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl xl:text-[3.6rem]">
            Hi, I&apos;m <span className="text-primary">Toufique</span>
          </h1>
          <p className="mt-2 text-3xl font-bold leading-[1.12] tracking-tight text-foreground/90 sm:text-4xl xl:text-[2.8rem]">
            I build things for the web.
          </p>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            I&apos;m a passionate web developer specializing in building
            exceptional digital experiences with modern technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ActionLink href="#projects">
              View My Work
              <ArrowRight className="size-4" />
            </ActionLink>
            <ActionLink href="/toufique-cv.pdf" download variant="outline">
              Download CV
              <Download className="size-4" />
            </ActionLink>
          </div>

          <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground/80">
            Technologies I work with
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {tech.map((icon) => (
              <li
                key={icon.slug}
                className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                title={icon.title}
              >
                <BrandIcon
                  icon={icon}
                  className="size-[22px]"
                  title={icon.title}
                  style={{ color: brandIconColor(icon) }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="relative isolate mx-auto w-full max-w-[27rem] lg:max-w-none">
          <div
            aria-hidden
            className="absolute left-1/2 top-4 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[90px] sm:h-[26rem] sm:w-[26rem]"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-2 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(138,135,255,0.55),rgba(88,70,210,0.18)_58%,transparent_72%)] sm:h-[24rem] sm:w-[24rem]"
          />
          <div
            aria-hidden
            className="bg-dot-grid pointer-events-none absolute -right-4 -top-8 -z-10 h-44 w-44 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]"
          />

          <div className="relative mx-auto w-[19rem] overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-[0_40px_120px_-40px_rgba(124,121,242,0.55)] sm:w-[22rem]">
            <Image
              src="/Toufique.jpg"
              alt="Portrait of Toufique"
              width={1126}
              height={1325}
              priority
              className="h-[26rem] w-full object-cover object-top sm:h-[30rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto mt-4 w-[17rem] rounded-2xl border border-white/10 bg-[#070c1f]/95 p-4 shadow-2xl backdrop-blur sm:absolute sm:-left-10 sm:bottom-8 sm:mt-0 sm:w-[17rem]">
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <Code2 className="size-3.5 text-emerald-400" />
              Code
            </div>
            <div className="mt-3 font-mono text-[10px] leading-[1.55] text-slate-300 sm:text-[11px]">
              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-sky-300">developer</span> = {"{"}
              </p>
              <p className="pl-3">
                name: <span className="text-emerald-300">&quot;Toufique&quot;</span>,
              </p>
              <p className="pl-3">
                skills: [<span className="text-emerald-300">&quot;HTML&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;CSS&quot;</span>,
              </p>
              <p className="pl-8">
                <span className="text-emerald-300">&quot;JavaScript&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;React&quot;</span>],
              </p>
              <p className="pl-3">
                passion: <span className="text-emerald-300">&quot;Building things&quot;</span>
              </p>
              <p className="pl-8">
                <span className="text-emerald-300">&quot;for the web&quot;</span>
              </p>
              <p>{"}"};</p>
            </div>
          </div>

          <svg
            aria-hidden
            viewBox="0 0 120 90"
            className="absolute -left-14 bottom-24 hidden h-20 w-24 text-white/30 lg:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M6 18c26-14 56-6 61 18 4 19-16 34-31 25-13-8-2-25 16-18 22 9 38 17 58 12" />
            <path d="M99 47l11 8-13 5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
