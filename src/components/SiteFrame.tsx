import { site } from '@/content/site';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';
import type { ReactNode } from 'react';

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/focus', label: 'Focus Hub' },
  { to: '/focus/research', label: 'Direction' },
  { to: '/focus/projects', label: 'Projects' },
];

function navClass({ isActive }: NavLinkRenderProps) {
  return [
    'border-b px-1 py-1 text-body-md transition-all duration-300',
    isActive
      ? 'border-primary text-primary'
      : 'border-transparent text-on-surface-variant hover:border-primary/40 hover:text-primary',
  ].join(' ');
}

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  const contactHref = site.links.email ? `mailto:${site.links.email}` : site.links.github;
  const contactLabel = site.links.email ? 'Contact' : 'GitHub';

  return (
    <main className="relative min-h-screen overflow-x-clip text-on-surface">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-surface-radial" />
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-full bg-cyber-grid bg-[size:72px_72px] opacity-[0.04]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-outline-variant/10 bg-surface-container/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1536px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <div className="font-display text-headline-lg-mobile font-black tracking-[-0.08em] text-on-surface">
            NICHOLAS_NELSON
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink key={item.to} className={navClass} end={item.end} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="btn-pill inline-flex items-center justify-center bg-primary-container px-4 py-2 font-body text-body-md font-bold text-on-primary-container shadow-[0_0_15px_rgba(77,142,255,0.3)] transition-all duration-300 hover:brightness-110"
              href={contactHref}
              rel="noreferrer"
              target={site.links.email ? undefined : '_blank'}
            >
              {contactLabel === 'GitHub' ? 'Secure Connection' : contactLabel}
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto flex min-h-screen max-w-[1536px] flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-10">
        <nav className="mb-8 flex gap-4 overflow-x-auto pb-1 md:hidden" aria-label="Primary mobile">
          {navItems.map((item) => (
            <NavLink key={item.to} className={navClass} end={item.end} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div id="main-content" className="flex-1">
          {children}
        </div>

        <footer className="mt-14 flex flex-col gap-5 border-t border-outline-variant/30 bg-surface-container-lowest/70 px-1 py-8 sm:px-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="font-code text-[11px] uppercase tracking-[0.22em] text-primary">
              N. Nelson // Applied AI
            </div>
            <p className="max-w-2xl text-sm text-on-surface-variant">
              Recruiter-facing portfolio focused on applied AI systems, context engineering, evaluation design, and technical communication.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-code text-code-sm text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
              href={site.links.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            {site.links.linkedin ? (
              <a
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-code text-code-sm text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                href={site.links.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            ) : null}
            {site.links.liveSite ? (
              <a
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-code text-code-sm text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                href={site.links.liveSite}
                rel="noreferrer"
                target="_blank"
              >
                Live Site
              </a>
            ) : null}
          </div>
        </footer>
      </div>
    </main>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl space-y-3">
        <div className="font-code text-label-caps uppercase text-primary">{eyebrow}</div>
        <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-on-surface">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-body-md text-on-surface-variant">{description}</p>
    </div>
  );
}

type StatusPillProps = {
  label: string;
  tone?: 'default' | 'active' | 'pending';
};

export function StatusPill({ label, tone = 'default' }: StatusPillProps) {
  const toneClass =
    tone === 'active'
      ? 'border-primary/30 bg-primary/10 text-primary'
      : tone === 'pending'
        ? 'border-amber-300/20 bg-amber-300/10 text-amber-200'
        : 'border-white/10 bg-white/[0.04] text-on-surface-variant';

  return (
    <span className={`inline-flex rounded-full border px-3 py-1.5 font-code text-code-sm ${toneClass}`}>
      {label}
    </span>
  );
}
