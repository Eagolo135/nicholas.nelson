import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';
import { useRef, type MouseEvent } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function makeSectionScroller(id: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

function List({ items }: { items: readonly string[] }) {
  return (
    <div className="tag-row">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="hero-actions">
      {site.links.github ? (
        <a className="button primary" href={site.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      ) : (
        <span className="button primary">GitHub link: TODO</span>
      )}

      {site.links.linkedin ? (
        <a className="button" href={site.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ) : (
        <span className="button">LinkedIn link: TODO</span>
      )}
    </div>
  );
}

export default function HomePage() {
  const scrollyRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.scrolly-card');
      if (!cards.length || !scrollyRef.current) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add('(min-width: 901px)', () => {
        gsap.set(cards, { autoAlpha: 0.2, y: 45 });
        gsap.set(cards[0], { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: scrollyRef.current,
            start: 'top top+=80',
            end: '+=1800',
            scrub: true,
            pin: '.scrolly-stage',
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.slice(1).forEach((card, index) => {
          const previous = cards[index];
          tl.to(previous, { autoAlpha: 0.25, y: -18, duration: 0.7 })
            .to(card, { autoAlpha: 1, y: 0, duration: 0.7 }, '<');
        });
      });

      return () => mm.revert();
    },
    { scope: scrollyRef }
  );

  return (
    <>
      <ScrollProgressBar />
      <main id="main" className="shell">
        <header className="topbar">
          <div className="brand">
            <strong>{site.person.name}</strong>
            <span>{site.person.title}</span>
          </div>
          <nav className="nav" aria-label="Primary">
            <a href="#direction" onClick={makeSectionScroller('direction')}>Direction</a>
            <a href="#research" onClick={makeSectionScroller('research')}>Research</a>
            <a href="#projects" onClick={makeSectionScroller('projects')}>Projects</a>
            <a href="#skills" onClick={makeSectionScroller('skills')}>Skills</a>
            <Link to="/focus">Focus pages</Link>
          </nav>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <Reveal className="hero-copy">
            <div className="eyebrow">Sage-Creator portfolio</div>
            <h1 id="hero-title">
              {site.person.name}
              <br />
              {site.person.title}
            </h1>
            <p className="lede">{site.person.headline}</p>
            <p className="small">{site.person.summary}</p>
            <div className="section-actions">
              <a className="button primary" href="#projects" onClick={makeSectionScroller('projects')}>
                View proof
              </a>
              <Link className="button" to="/focus/research">
                Read research
              </Link>
              <Link className="button" to="/focus/workflow">
                Review workflow
              </Link>
            </div>
            <SocialLinks />
          </Reveal>

          <Reveal className="hero-card">
            <div className="signal-grid">
              <div className="signal">
                <strong>Current direction</strong>
                <p>{site.direction.currentFocus}</p>
              </div>
              <div className="signal">
                <strong>Why it fits</strong>
                <p>{site.direction.shortExplanation}</p>
              </div>
              <div className="signal">
                <strong>Focus pages</strong>
                <div className="pill-row" style={{ marginTop: '0.7rem' }}>
                  {site.focusPages.map((page) => (
                    <Link key={page.slug} className="pill" to={`/focus/${page.slug}`}>
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section" id="direction">
          <div className="section-grid">
            <Reveal className="panel span-7">
              <div className="section-title">
                <h2>Professional direction</h2>
                <span className="chip">Scrollytelling section</span>
              </div>
              <p className="lede">{site.sections.about}</p>
              <p className="muted">
                The portfolio is intentionally built to be calm, research-driven, and credible rather than flashy.
              </p>
            </Reveal>
            <Reveal className="panel span-5">
              <div className="section-title">
                <h2>Vibe</h2>
              </div>
              <List items={['Professional', 'Focused', 'Modern', 'Future-facing', 'Technical', 'Believable']} />
            </Reveal>
          </div>
        </section>

        <section className="section scrolly-lab" id="story" ref={scrollyRef}>
          <div className="section-title">
            <h2>Scrollytelling: Fit Story</h2>
            <span className="chip">Pinned sequence</span>
          </div>
          <div className="scrolly-shell">
            <div className="scrolly-stage panel">
              <article className="scrolly-card">
                <p className="eyebrow">Signal 01</p>
                <h3>Direction clarity</h3>
                <p className="lede">{site.direction.currentFocus}</p>
                <p className="muted">{site.direction.shortExplanation}</p>
              </article>
              <article className="scrolly-card">
                <p className="eyebrow">Signal 02</p>
                <h3>Research-informed</h3>
                <p className="lede">{site.sections.research}</p>
                <p className="muted">
                  The goal is to show role-fit with evidence and reasoning, not generic cybersecurity buzzwords.
                </p>
              </article>
              <article className="scrolly-card">
                <p className="eyebrow">Signal 03</p>
                <h3>AI workflow discipline</h3>
                <p className="lede">{site.sections.aiWorkflow}</p>
                <p className="muted">AI is used as an assistant for structure and iteration, with human review on final decisions.</p>
              </article>
            </div>
            <div className="scrolly-spacer" aria-hidden="true" />
          </div>
        </section>

        <section className="section" id="research">
          <div className="section-grid">
            <Reveal className="panel span-5">
              <div className="section-title">
                <h2>Career research</h2>
                <Link className="chip" to="/focus/research">
                  Focus page
                </Link>
              </div>
              <p className="lede">{site.sections.research}</p>
            </Reveal>
            <Reveal className="panel span-7">
              <div className="section-title">
                <h2>What the role values</h2>
              </div>
              <StaggerGroup className="timeline">
                {[
                  { label: 'Accuracy', note: 'Security answers must be technically correct, not approximate.' },
                  { label: 'AI evaluation', note: 'Identify what AI got right, wrong, or dangerously incomplete.' },
                  { label: 'Technical writing', note: 'Explain complex ideas clearly enough to improve a model.' },
                  { label: 'Security reasoning', note: 'Understand attacker and defender perspectives.' },
                  { label: 'Coding comfort', note: 'Read and reason about security-relevant code.' },
                ].map(({ label, note }) => (
                  <StaggerItem key={label} className="timeline-entry">
                    <span className="timeline-label">{label}</span>
                    <p className="timeline-note">{note}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <p className="muted" style={{ marginTop: '1rem' }}>
                This section will expand with exact job research and citations as project details are finalized.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <h2>Featured projects</h2>
            <Link className="chip" to="/focus/projects">
              Focus page
            </Link>
          </div>
          <StaggerGroup className="focus-grid">
            {site.projects.map((project) => (
              <StaggerItem className="project-card" key={project.slug}>
                <p className="eyebrow">{project.status}</p>
                <h3>{project.name}</h3>
                <p className="muted">{project.description}</p>
                <ul>
                  {project.proof.map((proof) => (
                    <li key={proof}>{proof}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
            <StaggerItem className="project-card">
              <p className="eyebrow">Optional</p>
              <h3>Extra proof project</h3>
              <p className="muted">Optional slot reserved for a third project if it strengthens the narrative.</p>
              <div className="pill-row">
                <span className="pill">TBD</span>
                <span className="pill">TBD</span>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </section>

        <section className="section" id="skills">
          <div className="section-grid">
            <Reveal className="panel span-7">
              <div className="section-title">
                <h2>Skills and tools</h2>
              </div>
              {(
                [
                  { label: 'Cybersecurity', items: site.skills.cybersecurity },
                  { label: 'Technical', items: site.skills.technical },
                  { label: 'AI Workflow', items: site.skills.ai },
                  { label: 'Professional', items: site.skills.professional },
                ] as const
              ).map(({ label, items }) => (
                <div key={label} className="skill-group">
                  <span className="skill-group-label">{label}</span>
                  <StaggerGroup className="pill-row">
                    {items.map((skill) => (
                      <StaggerItem key={skill} className="pill">
                        {skill}
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              ))}
            </Reveal>

            <Reveal className="panel span-5">
              <div className="section-title">
                <h2>AI workflow</h2>
                <Link className="chip" to="/focus/workflow">
                  Focus page
                </Link>
              </div>
              <p className="lede">{site.sections.aiWorkflow}</p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="panel">
            <div className="section-title">
              <h2>Contact and links</h2>
            </div>
            <div className="hero-actions">
              {site.links.github ? (
                <a className="button primary" href={site.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : (
                <span className="button primary">GitHub profile URL: TODO</span>
              )}
              {site.links.linkedin ? (
                <a className="button" href={site.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              ) : (
                <span className="button">LinkedIn URL: TODO</span>
              )}
              {site.links.liveSite ? (
                <a className="button" href={site.links.liveSite} target="_blank" rel="noreferrer">
                  Live site
                </a>
              ) : (
                <span className="button">Live site URL: TODO</span>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
