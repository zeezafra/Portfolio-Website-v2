import { Mail } from "lucide-react";
import type { SocialLink } from "@/data/profile";
import { LinkedinGlyph, GithubGlyph, FacebookGlyph } from "@/components/icons/SocialGlyphs";

const ICONS = {
  linkedin: LinkedinGlyph,
  github: GithubGlyph,
  facebook: FacebookGlyph,
  mail: Mail,
} as const;

export function SocialLinks({
  socials,
  className = "",
}: {
  socials: SocialLink[];
  className?: string;
}) {
  const active = socials.filter((s) => s.href.trim().length > 0);

  if (active.length === 0) {
    // Nothing to render yet — real URLs haven't been added to data/profile.ts.
    return null;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {active.map(({ label, href, icon }) => {
        const Icon = ICONS[icon];
        const isEmail = icon === "mail";
        return (
          <a
            key={label}
            href={isEmail ? `mailto:${href}` : href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            aria-label={label}
            title={label}
            className="flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
