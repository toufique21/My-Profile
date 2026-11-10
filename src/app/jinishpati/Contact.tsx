import { ArrowRight, Mail, Phone, Quote } from "lucide-react";
import { siGithub, siInstagram, siX } from "simple-icons";
import { ActionLink } from "@/components/action-link";
import { BrandIcon } from "@/components/brand-icon";
import { SectionHeading } from "@/components/section-heading";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="LinkedIn"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com", icon: siGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: null },
  { label: "Twitter", href: "https://x.com", icon: siX },
  { label: "Instagram", href: "https://instagram.com", icon: siInstagram },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-3 lg:gap-10">
        <div>
          <SectionHeading
            eyebrow="Let's Work Together"
            title="Have a project in mind?"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            I&apos;m always open to discussing new projects and opportunities.
            Let&apos;s create something amazing together!
          </p>
          <ActionLink href="mailto:hello@toufique.dev" className="mt-7">
            Get In Touch
            <ArrowRight className="size-4" />
          </ActionLink>
        </div>

        <div className="lg:border-x lg:border-white/10 lg:px-8">
          <Quote className="size-8 text-primary/40" aria-hidden />
          <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/85">
            Toufique is an exceptional developer who delivers high-quality work
            on time. His attention to detail and problem-solving skills are
            outstanding.
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-violet-400 text-xs font-bold text-white">
              SJ
            </div>
            <div>
              <p className="text-sm font-medium">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">CEO, TechStart</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Follow Me" title="Let's stay connected" />
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  {social.icon ? (
                    <BrandIcon icon={social.icon} title={social.label} className="size-5" />
                  ) : (
                    <LinkedInIcon className="size-5" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-7 space-y-3 text-sm">
            <a
              href="mailto:mht69996@gmail.com"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail className="size-4" />
              </span>
              mht69996@gmail.com
            </a>
            <a
              href="tel:+880 1560 017734"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <Phone className="size-4" />
              </span>
              +880 1560 017734
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
