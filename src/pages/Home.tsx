import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

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
            <a href="#direction">Direction</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
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
              <a className="button primary" href="#projects">
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
