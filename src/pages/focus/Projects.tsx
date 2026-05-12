import { useDeferredValue, useState } from 'react';
import { Reveal, ScrollProgressBar } from '@/components/Reveal';
import { ProjectModal } from '@/components/ProjectModal';
import { SectionHeading, SiteFrame, StatusPill } from '@/components/SiteFrame';
import { site, type ProjectEntry } from '@/content/site';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectEntry | null>(null);
  const deferredQuery = useDeferredValue(query);
  const categories = ['All', ...Array.from(new Set(site.projects.map((project) => project.category)))];
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredProjects = site.projects.filter((project) => {
    const haystack = [
      project.name,
      project.category,
      project.summary,
      project.description,
      ...project.tags,
      ...project.searchTerms,
    ]
      .join(' ')
      .toLowerCase();

    const queryMatch = !normalizedQuery || haystack.includes(normalizedQuery);
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;

    return queryMatch && categoryMatch;
  });

  return (
    <>
      <ScrollProgressBar />
      <SiteFrame>
        <section className="mb-12">
          <Reveal className="liquid-glass-strong overflow-hidden rounded-[32px] border border-white/10 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-code text-code-sm text-primary">
                  <span aria-hidden="true">▣</span>
                  Featured Projects
                </div>
                <h1 className="mt-6 font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-on-surface text-glow">
                  Searchable project work with deeper architecture and evaluation detail.
                </h1>
                <p className="mt-5 max-w-3xl text-lg text-on-surface-variant">
                  This page turns the portfolio projects into a searchable surface. Each result opens a deeper modal view with summaries, capabilities, architecture, and visible proof.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <StatusPill label={`${filteredProjects.length} visible results`} tone="active" />
                <StatusPill label="Client-side search" tone="default" />
              </div>
            </div>
          </Reveal>
        </section>

        <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <section className="liquid-glass rounded-[28px] p-6">
              <div className="font-code text-label-caps uppercase text-primary">Query Interface</div>
              <div className="mt-4 flex items-center rounded-[18px] border border-primary/20 bg-surface-container-high px-4 py-3">
                <span className="mr-3 font-code text-code-sm text-primary">search</span>
                <input
                  className="w-full border-none bg-transparent text-on-surface outline-none placeholder:text-on-surface-variant"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects, tools, or methods..."
                  type="text"
                  value={query}
                />
                {query ? (
                  <button
                    className="ml-3 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-code text-code-sm text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                    onClick={() => setQuery('')}
                    type="button"
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </section>

            <section className="liquid-glass rounded-[28px] p-6">
              <div className="font-code text-label-caps uppercase text-primary">Category Filters</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => {
                  const active = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      className={[
                        'rounded-full border px-4 py-2 font-code text-code-sm transition-all duration-300',
                        active
                          ? 'border-primary/40 bg-primary/10 text-primary shadow-bloom'
                          : 'border-white/10 bg-white/[0.03] text-on-surface-variant hover:border-primary/30 hover:text-primary',
                      ].join(' ')}
                      onClick={() => setSelectedCategory(category)}
                      type="button"
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="liquid-glass rounded-[28px] p-6">
              <div className="font-code text-label-caps uppercase text-primary">Technical Arsenal</div>
              <div className="mt-4 space-y-4">
                {site.skills.slice(0, 3).map((group) => (
                  <article key={group.title} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                    <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-on-surface">{group.title}</h2>
                    <p className="mt-2 text-sm text-on-surface-variant">{group.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.slice(0, 3).map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-code text-code-sm text-on-surface-variant">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </aside>

          <section>
            <SectionHeading
              description={
                normalizedQuery
                  ? `Showing results for "${deferredQuery}". The filter runs against project names, categories, tags, summaries, and explicit search terms.`
                  : 'The right column is the main interaction surface: click a card to open the modal and inspect project summary, capabilities, architecture, and visible proof.'
              }
              eyebrow="Query Results"
              title={`${filteredProjects.length} match${filteredProjects.length === 1 ? '' : 'es'} found`}
            />

            {filteredProjects.length ? (
              <div className="grid gap-5 lg:grid-cols-2">
                {filteredProjects.map((project) => (
                  <Reveal key={project.slug} className="h-full">
                    <button
                      className="liquid-glass group flex h-full w-full flex-col overflow-hidden rounded-[28px] text-left transition-all duration-300 hover:border-primary/30"
                      onClick={() => setActiveProject(project)}
                      type="button"
                    >
                      <div className="relative h-48 overflow-hidden border-b border-white/10 bg-gradient-to-br from-primary/15 via-surface-container-high to-surface-container-lowest p-6">
                        <div className="absolute inset-0 bg-cyber-grid bg-[size:48px_48px] opacity-[0.08] transition-transform duration-500 group-hover:scale-110" />
                        <div className="relative flex h-full flex-col justify-between">
                          <div className="flex items-center justify-between gap-3">
                            <StatusPill label={project.status} tone={project.statusTone} />
                            <span className="font-code text-code-sm text-primary">Open modal</span>
                          </div>
                          <div>
                            <div className="font-code text-label-caps uppercase text-primary">{project.category}</div>
                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-on-surface">
                              {project.name}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-sm text-on-surface-variant">{project.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-code text-code-sm text-on-surface-variant">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 space-y-2">
                          {project.proof.slice(0, 2).map((proof) => (
                            <div key={proof} className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-on-surface-variant">
                              {proof}
                            </div>
                          ))}
                        </div>
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal className="liquid-glass rounded-[28px] p-8 text-center">
                <div className="font-code text-label-caps uppercase text-primary">No matches</div>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-on-surface">
                  No projects matched the current query.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
                  Try another keyword or clear the filters. Search runs against the current project set, including categories, methods, and tool-specific search terms.
                </p>
              </Reveal>
            )}
          </section>
        </div>

        <ProjectModal onClose={() => setActiveProject(null)} project={activeProject} />
      </SiteFrame>
    </>
  );
}
