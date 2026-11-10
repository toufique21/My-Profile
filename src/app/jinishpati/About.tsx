import { Calendar, Code2, Smile, Trophy, User } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { SectionHeading } from "@/components/section-heading";

const stats = [
  { icon: Calendar, value: "1+", label: "Years Experience" },
  { icon: Code2, value: "10+", label: "Projects Completed" },
  { icon: Smile, value: "3+", label: "Happy Clients" },
  { icon: Trophy, value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5 py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="I'm passionate about creating digital solutions"
          />
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            With 4+ years of experience in web development, I help businesses
            and individuals bring their ideas to life through clean, efficient,
            and user-friendly code.
          </p>
          <ActionLink href="#contact" variant="outline" className="mt-8">
            Learn More About Me
            <User className="size-4" />
          </ActionLink>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-primary/30 hover:bg-white/[0.04]"
            >
              <div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)]">
                <Icon className="size-5" />
              </div>
              <p className="mt-4 text-2xl font-bold tracking-tight">{value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
