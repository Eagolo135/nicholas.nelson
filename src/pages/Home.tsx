import { type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { StatusPill } from '@/components/SiteFrame';
import { site } from '@/content/site';

const heroBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAY_CD_-HgmxN8RQbi3wxGGZ-k25Q4qQ4TvY63xZGkK_kSdlyyI9U9LLyRCj6AMfARhHjpX8gaJwyV2l2ONlXwZp8N25IUe6L4gMBdqk3SWDR8TxlGltd0zUHMCGUSkvLM52ixxFE94tmwfLUimhasdP_q2L8e0vqtk5kHL_BWjqUmcMLG6uJsOBBs4Zv2PL23UB3OxJtkd1iP3Aby_WSlWQA-9nBwgnQUNM4dWdHYYKx8MEQJom_dbBvFUeWlhdS3WRsiw7Vf8xMuc';

const aboutBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKpW1fkp5LUp6Af7umvmM6mClUJ_mRgl_LlEDf2STTxagUumXvl0_z54pV3uZNHfMcDVeFCBU2ZRZdcQ5zQcQ7k_fJIaocynAreOkEMWNbo2XBljXlCiD9rjcgCjxe9yZ363B7o-wBnNfv29T1IbR9U2jdTLyBMm1GnEN7vgR4gfIxcNL-Gp9Hxj3VCAw1QxB3DgmuL1cD6C2MuCU5qUDGjxNTnYBCdoiRrEcMabRfVMA9wyDlEyZzyGpGvDJt1lWgD2395HjvTRPX';

const skillIcons = [
  { icon: 'psychology', iconClass: 'text-primary border-primary/30 bg-primary-container/20' },
  { icon: 'code', iconClass: 'text-secondary border-secondary/30 bg-secondary-container/20' },
  { icon: 'query_stats', iconClass: 'text-tertiary border-tertiary/30 bg-tertiary-container/20' },
  { icon: 'hub', iconClass: 'text-primary-container border-primary-container/30 bg-primary-container/10' },
] as const;

const projectIcons = [
  { icon: 'auto_awesome', iconClass: 'text-primary border-primary/20 bg-primary/10' },
  { icon: 'edit_square', iconClass: 'text-secondary border-secondary/20 bg-secondary/10' },
  { icon: 'model_training', iconClass: 'text-tertiary border-tertiary/20 bg-tertiary/10' },
  { icon: 'phone_iphone', iconClass: 'text-primary-container border-primary-container/20 bg-primary-container/10' },
  { icon: 'movie', iconClass: 'text-secondary-fixed border-secondary-fixed/20 bg-secondary-fixed/10' },
] as const;

function scrollToSection(id: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

export default function HomePage() {
  const contactHref = site.links.email ? `mailto:${site.links.email}` : site.links.github;

  return (
    <>
      <ScrollProgressBar />
      <main className="text-on-surface">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
        >
          Skip to content
        </a>

        <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/10 bg-surface-container/20 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1536px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
            <div className="magnetic-target font-display text-headline-lg-mobile font-black tracking-[-0.08em] text-on-surface">
              NICHOLAS_NELSON
            </div>
            <nav className="hidden items-center gap-6 md:flex" aria-label="Homepage">
              <a className="magnetic-target border-b border-primary font-body text-body-md font-bold text-primary" href="#projects" onClick={scrollToSection('projects')}>
                Projects
              </a>
              <a className="magnetic-target border-b border-transparent font-body text-body-md font-medium text-on-surface-variant hover:border-primary/40 hover:text-primary" href="#about" onClick={scrollToSection('about')}>
                About
              </a>
              <a className="magnetic-target border-b border-transparent font-body text-body-md font-medium text-on-surface-variant hover:border-primary/40 hover:text-primary" href="#direction" onClick={scrollToSection('direction')}>
                Direction
              </a>
              <a className="magnetic-target border-b border-transparent font-body text-body-md font-medium text-on-surface-variant hover:border-primary/40 hover:text-primary" href="#skills" onClick={scrollToSection('skills')}>
                Skills
              </a>
              <a className="magnetic-target border-b border-transparent font-body text-body-md font-medium text-on-surface-variant hover:border-primary/40 hover:text-primary" href="#contact" onClick={scrollToSection('contact')}>
                Contact
              </a>
            </nav>
            <a
              className="btn-pill magnetic-target inline-flex items-center bg-primary-container px-6 py-2 font-body text-body-md font-bold text-on-primary-container shadow-[0_0_15px_rgba(77,142,255,0.3)]"
              href={contactHref}
              rel="noreferrer"
              target={site.links.email ? undefined : '_blank'}
            >
              Contact
            </a>
          </div>
        </header>

        <div id="main-content">
          <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 text-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/40 to-background" />
              <img alt="Nicholas Nelson IT portfolio hero background" className="h-full w-full object-cover opacity-30" src={heroBackground} />
            </div>
            <Reveal className="relative z-20 mx-auto mt-10 max-w-4xl px-4">
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 font-code text-code-sm text-primary">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                  terminal
                </span>
                {site.home.eyebrow}
              </div>
              <h1 className="kinetic-text mt-6 font-display text-display-lg font-black leading-none text-on-surface text-glow md:text-[84px]">
                {site.person.name}
              </h1>
              <h2 className="mb-3 mt-2 font-display text-headline-lg text-primary">{site.person.title}</h2>
              <p className="mx-auto mb-4 max-w-3xl font-display text-headline-sm text-on-surface">{site.person.headline}</p>
              <p className="mx-auto mb-8 max-w-3xl text-body-md text-on-surface-variant">{site.person.summary}</p>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <a className="btn-pill magnetic-target w-full bg-primary px-8 py-4 text-center font-body text-body-md font-bold text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.4)] md:w-auto" href="#projects" onClick={scrollToSection('projects')}>
                  View Projects
                </a>
                <a className="btn-pill magnetic-target liquid-glass glass-hover flex w-full items-center justify-center gap-2 px-8 py-4 text-center font-body text-body-md font-medium text-on-surface-variant md:w-auto" href={site.links.github} rel="noreferrer" target="_blank">
                  GitHub
                </a>
                <a className="btn-pill magnetic-target liquid-glass glass-hover flex w-full items-center justify-center gap-2 px-8 py-4 text-center font-body text-body-md font-medium text-on-surface-variant md:w-auto" href={site.links.linkedin} rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </section>

          <section className="py-20" id="about">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <span className="mb-4 block font-code text-label-caps uppercase tracking-widest text-primary">{site.home.aboutEyebrow}</span>
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">{site.home.aboutTitle}</h2>
                  <div className="h-1 w-20 rounded-full bg-primary" />
                </div>

                <div className="liquid-glass grid grid-cols-1 items-center gap-12 rounded-[28px] p-8 md:grid-cols-2">
                  <div className="space-y-6 text-on-surface-variant">
                    {site.home.about.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-surface-container-lowest md:h-full">
                    <img alt="Abstract technical nodes" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen" src={aboutBackground} />
                    <div className="relative z-10 p-6 text-center">
                      <span className="material-symbols-outlined mb-3 text-[64px] text-primary">verified_user</span>
                      <div className="font-code text-code-sm text-primary-fixed">EST. 2026 // NJIT</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="bg-surface-container-low/30 py-20" id="direction">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <span className="mb-4 block font-code text-label-caps uppercase tracking-widest text-primary">{site.home.careerEyebrow}</span>
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">{site.home.careerTitle}</h2>
                  <p className="max-w-3xl text-on-surface-variant">{site.home.careerSummary[0]}</p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
                </div>
              </Reveal>

              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <Reveal className="liquid-glass rounded-[28px] p-8">
                  <div className="font-code text-label-caps uppercase text-primary">Current Direction</div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-on-surface">
                    {site.direction.currentFocus}
                  </h3>
                  <div className="mt-5 space-y-4 text-on-surface-variant">
                    <p>{site.direction.shortExplanation}</p>
                    {site.direction.details.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.08} className="liquid-glass rounded-[28px] p-8 inner-glow">
                  <div className="font-code text-label-caps uppercase text-primary">Why It Fits</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {site.research.signals.map((signal) => (
                      <StatusPill key={signal} label={signal} tone="active" />
                    ))}
                  </div>
                  <p className="mt-5 text-on-surface-variant">{site.direction.details[1]}</p>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="py-20" id="focus-areas">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <span className="mb-4 block font-code text-label-caps uppercase tracking-widest text-primary">{site.home.focusEyebrow}</span>
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">{site.home.focusTitle}</h2>
                  <p className="max-w-3xl text-on-surface-variant">{site.home.focusSummary}</p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
                </div>
              </Reveal>

              <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {site.home.focusAreas.map((area) => (
                  <StaggerItem className="liquid-glass glass-hover rounded-xl p-8" key={area.title}>
                    <div className="font-code text-label-caps uppercase text-primary">Focus Area</div>
                    <h3 className="mt-3 font-display text-[24px] font-semibold text-on-surface">{area.title}</h3>
                    <p className="mt-4 text-on-surface-variant">{area.body}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>

          <section className="bg-surface-container-low/30 py-20" id="skills">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <span className="mb-4 block font-code text-label-caps uppercase tracking-widest text-primary">{site.home.skillsEyebrow}</span>
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">{site.home.skillsTitle}</h2>
                  <p className="max-w-3xl text-on-surface-variant">{site.home.skillsSummary}</p>
                  <div className="h-1 w-20 rounded-full bg-primary" />
                </div>
              </Reveal>

              <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
                {site.skills.map((card, index) => {
                  const iconData = skillIcons[index % skillIcons.length];

                  return (
                  <StaggerItem className="liquid-glass glass-hover rounded-xl p-8" key={card.title}>
                    <div className="mb-6 flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${iconData.iconClass}`}>
                        <span className="material-symbols-outlined">{iconData.icon}</span>
                      </div>
                      <h3 className="font-body text-body-md font-bold text-on-surface">{card.title}</h3>
                    </div>
                    <p className="mb-4 text-sm text-on-surface-variant">{card.summary}</p>
                    <ul className="space-y-2 font-code text-code-sm text-on-surface-variant">
                      {card.items.map((item) => (
                        <li className="flex items-center gap-2" key={item}>
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </StaggerItem>
                )})}
              </StaggerGroup>
            </div>
          </section>

          <section className="py-20" id="projects">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <span className="mb-4 block font-code text-label-caps uppercase tracking-widest text-primary">{site.home.projectsEyebrow}</span>
                  <h2 className="kinetic-text mb-2 font-display text-headline-lg text-on-surface">{site.home.projectsTitle}</h2>
                  <p className="text-on-surface-variant">{site.home.projectsSummary}</p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
                </div>
              </Reveal>

              <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {site.projects.map((project, index) => {
                  const iconData = projectIcons[index % projectIcons.length];

                  return (
                  <StaggerItem className="liquid-glass glass-hover flex flex-col gap-5 rounded-xl p-8" key={project.slug}>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${iconData.iconClass}`}>
                      <span className="material-symbols-outlined">{iconData.icon}</span>
                    </div>
                    <div>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <StatusPill label={project.status} tone={project.statusTone} />
                        <StatusPill label={project.category} tone="default" />
                      </div>
                      <h3 className="mb-2 font-display text-[24px] font-semibold text-on-surface">{project.name}</h3>
                      <p className="mb-5 text-on-surface-variant">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span className="rounded border border-white/10 bg-surface-variant px-2 py-1 font-code text-[11px] text-on-surface-variant" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-4 font-body text-body-md font-bold text-primary">
                      Open in project view
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </div>
                  </StaggerItem>
                )})}
              </StaggerGroup>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="btn-pill inline-flex items-center rounded-full bg-primary px-6 py-3 font-code text-code-sm font-semibold text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.32)]" to="/focus/projects">
                  Open Search View
                </Link>
                <StatusPill label={`${site.projects.length} featured summaries`} tone="active" />
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low/30 py-20" id="contact">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <span className="mb-4 block font-code text-label-caps uppercase tracking-widest text-primary">{site.home.contactEyebrow}</span>
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">{site.home.contactTitle}</h2>
                  <p className="max-w-2xl text-on-surface-variant">{site.home.contactSummary}</p>
                  <div className="h-1 w-20 rounded-full bg-primary" />
                </div>

                <div className="liquid-glass rounded-xl p-8">
                  <div className="space-y-4 text-on-surface-variant">
                    <p>{site.home.contactSummary}</p>
                    <div className="flex flex-wrap gap-3">
                      <a className="btn-pill inline-flex items-center rounded-full bg-primary px-6 py-3 font-code text-code-sm font-semibold text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.32)]" href={site.links.github} rel="noreferrer" target="_blank">
                        GitHub
                      </a>
                      <a className="btn-pill inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-code text-code-sm text-on-surface-variant hover:border-primary/30 hover:text-primary" href={site.links.linkedin} rel="noreferrer" target="_blank">
                        LinkedIn
                      </a>
                      <a className="btn-pill inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-code text-code-sm text-on-surface-variant hover:border-primary/30 hover:text-primary" href={`mailto:${site.links.email}`}>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mb-12">
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">Direct Links</h2>
                  <div className="h-1 w-20 rounded-full bg-secondary" />
                </div>

                <div className="space-y-5">
                  {[
                    { label: 'GitHub', value: site.links.github, href: site.links.github, icon: 'code' },
                    { label: 'LinkedIn', value: site.links.linkedin, href: site.links.linkedin, icon: 'person' },
                    { label: 'Email', value: site.links.email, href: `mailto:${site.links.email}`, icon: 'mail' },
                  ].map((item) => (
                    <a
                      className="liquid-glass glass-hover flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:border-primary/30"
                      href={item.href}
                      key={item.label}
                      rel={item.label === 'Email' ? undefined : 'noreferrer'}
                      target={item.label === 'Email' ? undefined : '_blank'}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface">{item.label}</h4>
                        <p className="text-xs text-on-surface-variant break-all">{item.value}</p>
                      </div>
                    </a>
                  ))}

                  <a
                    className="liquid-glass glass-hover block rounded-xl border border-dashed border-outline-variant/30 p-5 transition-all duration-300 hover:border-primary/30"
                    href={site.links.liveSite}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="mb-2 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-variant/50 text-on-surface-variant">
                        <span className="material-symbols-outlined">public</span>
                      </div>
                      <h4 className="font-bold text-on-surface-variant">Live Portfolio</h4>
                    </div>
                    <p className="ml-14 text-sm text-on-surface-variant break-all">{site.links.liveSite}</p>
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        </div>

        <footer className="border-t border-outline-variant/10 px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 md:flex-row">
            <div className="max-w-xs">
              <div className="mb-6 font-display text-headline-lg-mobile font-black tracking-[-0.08em] text-on-surface">NICHOLAS_NELSON</div>
              <p className="mb-8 text-sm text-on-surface-variant">{site.home.footerSummary}</p>
              <div className="flex gap-4">
                <a className="text-on-surface-variant transition-colors hover:text-primary" href={site.links.github} rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined">code</span>
                </a>
                {site.links.linkedin ? (
                  <a className="text-on-surface-variant transition-colors hover:text-primary" href={site.links.linkedin} rel="noreferrer" target="_blank">
                    <span className="material-symbols-outlined">person</span>
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="mb-4 font-bold text-on-surface">Navigation</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li><a className="hover:text-primary" href="#main-content" onClick={scrollToSection('main-content')}>Home</a></li>
                  <li><a className="hover:text-primary" href="#about" onClick={scrollToSection('about')}>About</a></li>
                  <li><a className="hover:text-primary" href="#direction" onClick={scrollToSection('direction')}>Direction</a></li>
                  <li><a className="hover:text-primary" href="#projects" onClick={scrollToSection('projects')}>Projects</a></li>
                  <li><a className="hover:text-primary" href="#skills" onClick={scrollToSection('skills')}>Skills</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-bold text-on-surface">Contact</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">mail</span> {site.links.email || 'GitHub contact available'}</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">code</span> {site.links.github}</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">person</span> {site.links.linkedin}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl border-t border-outline-variant/5 pt-5 text-center text-xs text-on-surface-variant/50">
            © 2026 NICHOLAS NELSON // APPLIED_AI_SYSTEMS_PORTFOLIO
          </div>
        </footer>
      </main>
    </>
  );
}
