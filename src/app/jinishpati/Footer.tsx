import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <p>© 2026 Toufique. All rights reserved.</p>
        <p className="inline-flex items-center gap-1.5">
          Made with
          <Heart className="size-3.5 fill-rose-500 text-rose-500" aria-label="love" />
          by Toufique
        </p>
      </div>
    </footer>
  );
};

export default Footer;
