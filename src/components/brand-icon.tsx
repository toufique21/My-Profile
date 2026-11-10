import type { CSSProperties } from "react";
import type { SimpleIcon } from "simple-icons";

/**
 * Brand icons come from `simple-icons` because lucide-react dropped brand marks.
 * The icon inherits `currentColor`, so pass a text color or style.
 */
export function BrandIcon({
  icon,
  className,
  title,
  style,
}: {
  icon: Pick<SimpleIcon, "path" | "title">;
  className?: string;
  title?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      role="img"
      aria-label={title ?? icon.title}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Brand hexes on a dark surface: keep dark logos readable. */
export function brandColor(hex: string) {
  const value = parseInt(hex, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.26 ? "#e9ebff" : `#${hex}`;
}

/** Icon color used across the site, with a couple of brand corrections. */
export function brandIconColor(icon: { title: string; hex: string }) {
  if (icon.title === "CSS") return "#2965F1";
  return brandColor(icon.hex);
}
