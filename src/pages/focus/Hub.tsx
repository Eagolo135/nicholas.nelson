import { Link } from 'react-router-dom';
import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { SectionHeading, SiteFrame, StatusPill } from '@/components/SiteFrame';
import { site } from '@/content/site';

const hubSignals = [
  'Role-fit research',
  'Searchable project evidence',
  'Modal deep-dive detail',
] as const;

export default function FocusHub() {
  return (
    <>
      <ScrollProgressBar />
      <SiteFrame>
        <section className="liquid-glass-strong relative overflow-hidden rounded-[32px] border border-white/10 p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-code text-code-sm text-primary">
                <span aria-hidden="true">▣</span>
                Intelligence Hub
              </div>
              <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-on-surface text-glow">
                Research and project detail behind the public homepage.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-on-surface-variant">
                This route acts as the bridge between the homepage and the deeper evidence layers. It keeps the navigation simple while giving the redesign a dedicated orientation surface.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {hubSignals.map((signal) => (
                  <StatusPill key={signal} label={signal} tone="active" />
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary px-6 py-3 font-code text-code-sm text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.32)] transition-all duration-300 hover:brightness-110"
                  to="/focus/research"
                >
                  Open Research
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-code text-code-sm text-on-surface glass-hover"
                  to="/focus/projects"
                >
                  Open Projects
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                <article className="liquid-glass rounded-[26px] p-6 inner-glow">
                  <div className="font-code text-label-caps uppercase text-primary">Current Public Scope</div>
                  <p className="mt-4 text-body-md text-on-surface-variant">
                    Every page stays recruiter-facing and evidence-first. The redesign adds stronger interaction patterns without expanding into unsupported claims or framework commentary.
                  </p>
                </article>
                <article className="liquid-glass rounded-[26px] p-6 glass-hover">
                  <div className="font-code text-label-caps uppercase text-primary">Where to go next</div>
                  <div className="mt-4 space-y-4 text-sm text-on-surface-variant">
                    <p>Use Research for role-fit framing, evaluation standards, and cloud-aware AI review logic.</p>
                    <p>Use Projects for searchable evidence lanes and modal-based detail on each portfolio entry.</p>
                  </div>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeading
            description="The hub keeps the routing small but gives the redesign a dedicated place to explain what each deeper page is supposed to do."
            eyebrow="Navigation Layers"
            title="Two deeper routes, each with a distinct review job."
          />
          <StaggerGroup className="grid gap-5 lg:grid-cols-2">
            {site.focusPages.map((page) => (
              <StaggerItem key={page.slug} className="liquid-glass rounded-[28px] p-6 glass-hover">
                <div className="font-code text-label-caps uppercase text-primary">Focus Page</div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-on-surface">
                  {page.title}
                </h2>
                <p className="mt-4 text-sm text-on-surface-variant">{page.summary}</p>
                <Link
                  className="mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/15 px-4 py-2 font-code text-code-sm text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/20"
                  to={`/focus/${page.slug}`}
                >
                  Open {page.title}
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </SiteFrame>
    </>
  );
}
