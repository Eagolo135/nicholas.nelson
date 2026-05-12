import { type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { StatusPill } from '@/components/SiteFrame';
import { site } from '@/content/site';

const heroBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAY_CD_-HgmxN8RQbi3wxGGZ-k25Q4qQ4TvY63xZGkK_kSdlyyI9U9LLyRCj6AMfARhHjpX8gaJwyV2l2ONlXwZp8N25IUe6L4gMBdqk3SWDR8TxlGltd0zUHMCGUSkvLM52ixxFE94tmwfLUimhasdP_q2L8e0vqtk5kHL_BWjqUmcMLG6uJsOBBs4Zv2PL23UB3OxJtkd1iP3Aby_WSlWQA-9nBwgnQUNM4dWdHYYKx8MEQJom_dbBvFUeWlhdS3WRsiw7Vf8xMuc';

const aboutBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKpW1fkp5LUp6Af7umvmM6mClUJ_mRgl_LlEDf2STTxagUumXvl0_z54pV3uZNHfMcDVeFCBU2ZRZdcQ5zQcQ7k_fJIaocynAreOkEMWNbo2XBljXlCiD9rjcgCjxe9yZ363B7o-wBnNfv29T1IbR9U2jdTLyBMm1GnEN7vgR4gfIxcNL-Gp9Hxj3VCAw1QxB3DgmuL1cD6C2MuCU5qUDGjxNTnYBCdoiRrEcMabRfVMA9wyDlEyZzyGpGvDJt1lWgD2395HjvTRPX';

const heroTitle = 'Nicholas Nelson';
const heroSubtitle = 'Security-minded IT student building practical AI-assisted tools.';

const skillCards = [
  {
    icon: 'code',
    iconClass: 'text-primary border-primary/30 bg-primary-container/20',
    title: 'Programming & Scripting',
    items: ['Python (Core Toolset)', 'Linux (CLI & Shell)', 'HTML / CSS', 'SQL (Database Fundamentals)'],
  },
  {
    icon: 'psychology',
    iconClass: 'text-secondary border-secondary/30 bg-secondary-container/20',
    title: 'AI-Assisted Development',
    items: ['Prompt Engineering', 'AI Output Review', 'AI-Driven Tool Building', 'Code Refactoring & Review'],
  },
  {
    icon: 'shield',
    iconClass: 'text-tertiary border-tertiary/30 bg-tertiary-container/20',
    title: 'Cybersecurity & Networking',
    items: ['Wireshark (Packet Analysis)', 'Network Protocol Mapping', 'Vulnerability Research', 'Secure System Configuration'],
  },
  {
    icon: 'build',
    iconClass: 'text-primary-container border-primary-container/30 bg-primary-container/10',
    title: 'Developer Tools',
    items: ['Git & GitHub', 'VS Code', 'Virtualized Lab Environments', 'Markdown Documentation'],
  },
  {
    icon: 'assignment_turned_in',
    iconClass: 'text-secondary-fixed border-secondary-fixed/30 bg-secondary-fixed/10',
    title: 'Software Practices',
    items: ['Technical Writing', 'Structured Analysis', 'Security-First Review', 'Evidence-Controlled Publishing'],
  },
] as const;

const homeProjects = [
  {
    icon: 'construction',
    iconClass: 'text-primary border-primary/20 bg-primary/10',
    title: 'Revised Midterm Project',
    body: 'Reserved for the verified final summary of the revised assignment once the public-safe details are confirmed.',
    tags: ['Revision', 'Academic Work', 'Evidence Control'],
    action: 'Project Deck',
  },
  {
    icon: 'deployed_code',
    iconClass: 'text-secondary border-secondary/20 bg-secondary/10',
    title: 'AI-Maintained Portfolio',
    body: 'This site itself, used as a public-facing example of AI-assisted iteration, design translation, and evidence-scoped publishing.',
    tags: ['React', 'Tailwind', 'AI Collaboration'],
    action: 'Explore System',
  },
  {
    icon: 'event_note',
    iconClass: 'text-tertiary border-tertiary/20 bg-tertiary/10',
    title: 'Job Technology Project',
    body: 'Reserved for the verified technology or role-alignment summary once the final project framing is ready for public review.',
    tags: ['Career Mapping', 'Technology Review', 'Cloud Direction'],
    action: 'Project Deck',
  },
  {
    icon: 'lan',
    iconClass: 'text-primary-container border-primary-container/20 bg-primary-container/10',
    title: 'Network and Security Labs',
    body: 'Hands-on lab work supporting packet analysis, network reasoning, and security fundamentals in controlled environments.',
    tags: ['Wireshark', 'Linux', 'Networking'],
    action: 'Lab Notes',
  },
] as const;

const coursework = [
  'Network Protocols',
  'Information Security Fundamentals',
  'Systems Analysis',
  'Linux Operating Systems',
  'Technical Writing',
  'Python for IT',
] as const;

const certifications = ['ServSafe Certification'] as const;
const plannedCertifications = ['CompTIA Network+', 'CompTIA Security+', 'Google Cybersecurity Certificate'] as const;

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
              <a className="magnetic-target border-b border-transparent font-body text-body-md font-medium text-on-surface-variant hover:border-primary/40 hover:text-primary" href="#skills" onClick={scrollToSection('skills')}>
                Skills
              </a>
              <a className="magnetic-target border-b border-transparent font-body text-body-md font-medium text-on-surface-variant hover:border-primary/40 hover:text-primary" href="#education" onClick={scrollToSection('education')}>
                Education
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
                NJIT // IT STUDENT // CYBER &amp; AI
              </div>
              <h1 className="kinetic-text mt-6 font-display text-display-lg font-black leading-none text-on-surface text-glow md:text-[84px]">
                {heroTitle}
              </h1>
              <h2 className="mb-6 mt-2 font-display text-headline-lg text-primary">{heroSubtitle}</h2>
              <p className="mx-auto mb-8 max-w-3xl text-body-md text-on-surface-variant">
                Pursuing a BS in Information Technology at NJIT with a focus on Network and Information Security. Currently developing efficiency-focused tools using Python, Linux, and Wireshark, while leveraging AI and Git to bridge the gap between complex systems and practical, everyday solutions.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <a className="btn-pill magnetic-target w-full bg-primary px-8 py-4 text-center font-body text-body-md font-bold text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.4)] md:w-auto" href="#projects" onClick={scrollToSection('projects')}>
                  View Projects
                </a>
                <a
                  className="btn-pill magnetic-target liquid-glass glass-hover w-full px-8 py-4 text-center font-body text-body-md font-bold text-on-surface md:w-auto"
                  href={site.links.liveSite || '#'}
                >
                  View Resume
                </a>
                <a className="btn-pill magnetic-target liquid-glass glass-hover flex w-full items-center justify-center gap-2 px-8 py-4 text-center font-body text-body-md font-medium text-on-surface-variant md:w-auto" href={site.links.github} rel="noreferrer" target="_blank">
                  GitHub
                </a>
              </div>
            </Reveal>
          </section>

          <section className="py-20" id="about">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <span className="mb-4 block font-code text-label-caps uppercase tracking-widest text-primary">Core Philosophy</span>
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">Structured, Practical, Secure.</h2>
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

          <section className="bg-surface-container-low/30 py-20" id="skills">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">Technical Arsenal</h2>
                  <div className="h-1 w-20 rounded-full bg-primary" />
                </div>
              </Reveal>

              <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {skillCards.map((card) => (
                  <StaggerItem className="liquid-glass glass-hover rounded-xl p-8" key={card.title}>
                    <div className="mb-6 flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${card.iconClass}`}>
                        <span className="material-symbols-outlined">{card.icon}</span>
                      </div>
                      <h3 className="font-body text-body-md font-bold text-on-surface">{card.title}</h3>
                    </div>
                    <ul className="space-y-2 font-code text-code-sm text-on-surface-variant">
                      {card.items.map((item) => (
                        <li className="flex items-center gap-2" key={item}>
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>

          <section className="py-20" id="projects">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <h2 className="kinetic-text mb-2 font-display text-headline-lg text-on-surface">Strategic Deployments</h2>
                  <p className="text-on-surface-variant">Practical applications of AI and cybersecurity fundamentals.</p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
                </div>
              </Reveal>

              <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {homeProjects.map((project) => (
                  <StaggerItem className="liquid-glass glass-hover flex flex-col gap-5 rounded-xl p-8" key={project.title}>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${project.iconClass}`}>
                      <span className="material-symbols-outlined">{project.icon}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-[24px] font-semibold text-on-surface">{project.title}</h3>
                      <p className="mb-5 text-on-surface-variant">{project.body}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span className="rounded border border-white/10 bg-surface-variant px-2 py-1 font-code text-[11px] text-on-surface-variant" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-4 font-body text-body-md font-bold text-primary">
                      {project.action}
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="btn-pill inline-flex items-center rounded-full bg-primary px-6 py-3 font-code text-code-sm font-semibold text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.32)]" to="/focus/projects">
                  Open Search View
                </Link>
                <StatusPill label="Pending facts stay marked" tone="pending" />
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low/30 py-20" id="education">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-10">
              <Reveal>
                <div className="mb-12">
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">Education</h2>
                  <div className="h-1 w-20 rounded-full bg-primary" />
                </div>

                <div className="liquid-glass rounded-xl p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-on-surface">NJIT (New Jersey Institute of Technology)</h3>
                      <p className="font-medium text-primary">BS in Information Technology</p>
                    </div>
                    <span className="whitespace-nowrap font-code text-code-sm text-primary">Expected Fall 2026</span>
                  </div>
                  <p className="mb-6 text-sm italic text-on-surface-variant">Specialization: Network and Information Security</p>
                  <div>
                    <h4 className="mb-2 font-code text-label-caps uppercase text-on-surface-variant">Relevant Coursework</h4>
                    <ul className="grid grid-cols-1 gap-2 font-code text-code-sm text-on-surface-variant sm:grid-cols-2">
                      {coursework.map((course) => (
                        <li key={course}>• {course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mb-12">
                  <h2 className="mb-2 font-display text-headline-lg text-on-surface">Certifications</h2>
                  <div className="h-1 w-20 rounded-full bg-secondary" />
                </div>

                <div className="space-y-5">
                  {certifications.map((cert) => (
                    <div className="liquid-glass flex items-center gap-4 rounded-xl p-5" key={cert}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                        <span className="material-symbols-outlined">workspace_premium</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface">{cert}</h4>
                        <p className="text-xs text-on-surface-variant">Professional Standard Compliance</p>
                      </div>
                    </div>
                  ))}

                  <div className="liquid-glass rounded-xl border border-dashed border-outline-variant/30 p-5">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-variant/50 text-on-surface-variant">
                        <span className="material-symbols-outlined">hourglass_empty</span>
                      </div>
                      <h4 className="font-bold text-on-surface-variant">In Progress / Planned</h4>
                    </div>
                    <ul className="ml-14 space-y-2 text-sm text-on-surface-variant">
                      {plannedCertifications.map((cert) => (
                        <li key={cert}>• {cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </div>

        <footer className="border-t border-outline-variant/10 px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 md:flex-row">
            <div className="max-w-xs">
              <div className="mb-6 font-display text-headline-lg-mobile font-black tracking-[-0.08em] text-on-surface">NICHOLAS_NELSON</div>
              <p className="mb-8 text-sm text-on-surface-variant">
                Security-minded IT student building practical AI-assisted tools. Focused on clear technical reasoning and evidence-controlled public work.
              </p>
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
                  <li><a className="hover:text-primary" href="#projects" onClick={scrollToSection('projects')}>Projects</a></li>
                  <li><a className="hover:text-primary" href="#skills" onClick={scrollToSection('skills')}>Skills</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-bold text-on-surface">Contact</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">mail</span> {site.links.email || 'GitHub contact available'}</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">location_on</span> Newark, NJ</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">school</span> NJIT Student</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl border-t border-outline-variant/5 pt-5 text-center text-xs text-on-surface-variant/50">
            © 2026 NICHOLAS NELSON // DESIGNED WITH AI // SECURE_PORTFOLIO_V1.0
          </div>
        </footer>
      </main>
    </>
  );
}
