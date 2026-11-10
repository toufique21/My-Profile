"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { ActionLink } from "@/components/action-link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="font-mono text-primary">&lt;/&gt;</span>
          <span className="uppercase tracking-[0.14em]">Toufique</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`relative text-sm transition-colors hover:text-foreground ${
                active === link.label ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
              {active === link.label ? (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink href="#contact" className="hidden h-10 sm:inline-flex">
            Hire Me
            <ArrowRight className="size-4" />
          </ActionLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-background/95 px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                }}
                className={`rounded-xl px-3 py-3 text-sm ${
                  active === link.label
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
