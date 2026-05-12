import { useEffect } from 'react';
import { StatusPill } from '@/components/SiteFrame';
import type { ProjectEntry } from '@/content/site';

type ProjectModalProps = {
  project: ProjectEntry | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-surface-container-lowest/85 p-4 backdrop-blur-md" onClick={onClose}>
      <div
        aria-modal="true"
        className="liquid-glass-strong max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex max-h-[92vh] flex-col md:flex-row">
          <aside className="flex w-full flex-col gap-5 border-b border-white/10 bg-white/[0.03] p-5 md:w-2/5 md:border-b-0 md:border-r md:p-7">
            <div className="relative overflow-hidden rounded-[22px] border border-primary/20 bg-gradient-to-br from-primary/15 via-surface-container-high to-surface-container-lowest p-6">
              <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-[0.08]" />
              <div className="relative space-y-4">
                <div className="flex flex-wrap gap-2">
                  <StatusPill label={project.status} tone={project.statusTone} />
                  <StatusPill label={project.category} tone="default" />
                </div>
                <div>
                  <div className="font-code text-[11px] uppercase tracking-[0.2em] text-primary">
                    Project Signal
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-on-surface">
                    {project.name}
                  </h2>
                </div>
                <p className="text-sm text-on-surface-variant">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-code text-code-sm text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-code text-label-caps uppercase text-primary">Public Summary</h3>
              <p className="text-body-md text-on-surface-variant">{project.description}</p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              {project.links?.sourceHref ? (
                <a
                  className="inline-flex items-center justify-between rounded-full border border-primary/30 bg-primary/15 px-5 py-3 font-code text-code-sm text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/20"
                  href={project.links.sourceHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {project.links.sourceLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="inline-flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 font-code text-code-sm text-on-surface-variant">
                  Source pending
                </span>
              )}

              {project.links?.docsHref ? (
                <a
                  className="inline-flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 font-code text-code-sm text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                  href={project.links.docsHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {project.links.docsLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="inline-flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 font-code text-code-sm text-on-surface-variant">
                  Documentation pending
                </span>
              )}
            </div>
          </aside>

          <section className="scrollbar-thin flex-1 overflow-y-auto p-5 md:p-7">
            <button
              className="mb-5 ml-auto flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-code text-code-sm text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
              onClick={onClose}
              type="button"
            >
              Close
            </button>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 font-code text-label-caps uppercase text-primary">Core Capabilities</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {project.capabilities.map((capability) => (
                    <article key={capability.title} className="liquid-glass rounded-[20px] p-4">
                      <h4 className="font-display text-lg font-semibold text-on-surface">{capability.title}</h4>
                      <p className="mt-2 text-sm text-on-surface-variant">{capability.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-code text-label-caps uppercase text-primary">Command Output</h3>
                <div className="terminal-well rounded-[20px] p-5 font-code text-code-sm text-on-surface">
                  <div className="mb-4 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-error/40" />
                    <span className="h-3 w-3 rounded-full bg-primary/20" />
                    <span className="h-3 w-3 rounded-full bg-tertiary-fixed-dim/20" />
                  </div>
                  <div className="space-y-2">
                    {project.commandPreview.map((line) => (
                      <div key={line} className="text-on-surface-variant">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-code text-label-caps uppercase text-primary">Technical Architecture</h3>
                <div className="space-y-4">
                  {project.architecture.map((step, index) => (
                    <div key={step.title} className="flex gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-container-high font-code text-code-sm text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-on-surface">{step.title}</h4>
                        <p className="mt-2 text-sm text-on-surface-variant">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mb-4 font-code text-label-caps uppercase text-primary">Visible Proof</h3>
                <ul className="grid gap-3">
                  {project.proof.map((proof) => (
                    <li key={proof} className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-on-surface-variant">
                      {proof}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
