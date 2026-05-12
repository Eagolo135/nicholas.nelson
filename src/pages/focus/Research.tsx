import { Link } from 'react-router-dom';
import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { SectionHeading, SiteFrame, StatusPill } from '@/components/SiteFrame';
import { site } from '@/content/site';

export default function Research() {
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
                Career Research
              </div>
              <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-on-surface text-glow">
                {site.direction.currentFocus}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-on-surface-variant">{site.research.summary}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {site.research.signals.map((signal) => (
                  <StatusPill key={signal} label={signal} tone="active" />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="liquid-glass rounded-[28px] p-6 inner-glow">
                <div className="font-code text-label-caps uppercase text-primary">Research Summary</div>
                <div className="mt-5 space-y-5 text-on-surface-variant">
                  <p>
                    The role works as a target because it depends on technical judgment instead of only tool familiarity. That is where research quality, review habits, and careful explanation start to matter.
                  </p>
                  <p>
                    The public site stays conservative on purpose: it shows the role case clearly, but it does not overstate finished cloud-specific proof where the underlying project detail is still being verified.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeading
            description="These role details explain why the direction fits this portfolio and what still needs to improve before the case is stronger."
            eyebrow="Role Breakdown"
            title="What this direction depends on."
          />
          <StaggerGroup className="grid gap-5 lg:grid-cols-2">
            {site.research.roleDetails.map((detail) => (
              <StaggerItem key={detail.title} className="liquid-glass rounded-[28px] p-6 glass-hover">
                <div className="font-code text-label-caps uppercase text-primary">{detail.title}</div>
                <p className="mt-4 text-sm text-on-surface-variant">{detail.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="mt-12">
          <SectionHeading
            description="These standards are the basis for judging whether AI-generated security guidance is useful, incomplete, or unsafe."
            eyebrow="Evaluation Standards"
            title="How technical answers should be judged."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {site.research.evaluationStandards.map((standard) => (
              <Reveal key={standard.title} className="liquid-glass rounded-[28px] p-6 glass-hover">
                <div className="font-code text-label-caps uppercase text-primary">{standard.title}</div>
                <p className="mt-4 text-sm text-on-surface-variant">{standard.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="liquid-glass mt-12 rounded-[28px] p-6 sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="font-code text-label-caps uppercase text-primary">Next Surface</div>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-on-surface">
                Move from role research into project evidence.
              </h2>
              <p className="mt-4 text-on-surface-variant">
                The projects route uses the search and modal patterns from the Stitch package so the public evidence layer can be reviewed more interactively.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary px-6 py-3 font-code text-code-sm text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.32)] transition-all duration-300 hover:brightness-110"
                to="/focus/projects"
              >
                View Projects
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-code text-code-sm text-on-surface glass-hover"
                to="/"
              >
                Back Home
              </Link>
            </div>
          </div>
        </Reveal>
      </SiteFrame>
    </>
  );
}
