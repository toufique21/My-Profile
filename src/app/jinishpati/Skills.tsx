import { BrandIcon, brandIconColor } from "@/components/brand-icon";
import { SectionHeading } from "@/components/section-heading";
import {
  siCss,
  siGit,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const skills = [
  { icon: siHtml5, name: "HTML", level: 95 },
  { icon: siCss, name: "CSS", level: 90 },
  { icon: siJavascript, name: "JavaScript", level: 90 },
  { icon: siReact, name: "React.js", level: 85 },
  { icon: siNextdotjs, name: "Next.js", level: 80 },
  { icon: siTypescript, name: "TypeScript", level: 85 },
  { icon: siNodedotjs, name: "Node.js", level: 80 },
  { icon: siTailwindcss, name: "Tailwind CSS", level: 90 },
  { icon: siGit, name: "Git", level: 30 },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/5 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="My Skills" title="Technologies I Master" align="center" />

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon, name, level }) => (
            <div key={name}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03]">
                    <BrandIcon
                      icon={icon}
                      title={name}
                      className="size-4"
                      style={{ color: brandIconColor(icon) }}
                    />
                  </span>
                  <span className="text-sm font-medium">{name}</span>
                </div>
                <span className="text-xs font-semibold text-primary">{level}%</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-violet-400"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
