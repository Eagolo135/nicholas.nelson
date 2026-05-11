import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

const projectSignals = [
  'Revision evidence',
  'Role alignment',
  'Verified details pending',
] as const;

const projectStandards = [
  {
    label: 'Why these entries exist',
    body: 'Each project needs to support the Cloud Security Engineer - AI Trainer direction rather than act as generic portfolio filler.',
  },
  {
    label: 'What still needs work',
    body: 'Both entries still need final verified assignment detail before they can function as complete recruiter-grade proof.',
  },
  {
    label: 'What the final version should show',
    body: 'Revision quality, technical judgment, role relevance, and clearer cloud-specific evidence.',
  },
] as const;

export default function Projects() {
  return (
    <>
      <ScrollProgressBar />
      <main className="shell shell-home">
        <header className="topbar">
          <div className="brand">
            <strong>Project focus</strong>
            <span>Proof of direction</span>
          </div>
          <nav className="nav" aria-label="Focus navigation">
            <Link to="/">Home</Link>
            <Link to="/focus">Focus hub</Link>
            <Link to="/focus/research">Research</Link>
          </nav>
        </header>

        <section className="hero" aria-labelledby="projects-title">
          <Reveal className="hero-copy">
            <div className="eyebrow">Featured projects</div>
            <h1 id="projects-title">Proof of direction</h1>
            <p className="lede">Each project below is included because it should support the Cloud Security Engineer - AI Trainer direction, not just fill space on the page.</p>
            <p className="small">This page is intentionally honest about its remaining gap: the structure is correct, but the final verified assignment details still need to replace the placeholders.</p>

            <div className="hero-pills">
              {projectSignals.map((signal) => (
                <span className="pill" key={signal}>{signal}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero-stage" delay={0.08}>
            <div className="hero-visual">
              <div className="hero-ambient" aria-hidden="true">
                <span className="ambient-orb ambient-orb-cyan" />
                <span className="ambient-orb ambient-orb-magenta" />
                <span className="ambient-grid" />
              </div>

              <div className="signal-board">
                <div className="signal-board-header">
                  <span className="window-label">Project summary</span>
                  <span className="signal-board-status">Evidence layer</span>
                </div>

                <div className="signal-board-grid">
                  <article className="mini-card signal-panel signal-panel-wide">
                    <span className="mini-card-label">Current state</span>
                    <strong>Two project slots are defined and waiting for final verified detail.</strong>
                    <p>The portfolio structure already reflects the target role. The next improvement is replacing placeholder copy with exact scope, revision, and outcome information.</p>
                  </article>

                  <article className="mini-card signal-panel">
                    <span className="mini-card-label">Projects included</span>
                    <strong>{site.projects.length} visible proof entries</strong>
                  </article>

                  <article className="mini-card signal-panel">
                    <span className="mini-card-label">Primary gap</span>
                    <strong>Final assignment details are still pending</strong>
                  </article>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Project standards</div>
              <h2>What these entries are supposed to prove.</h2>
            </div>
            <p className="muted">The value of these projects is not volume. It is whether they show revision quality, research discipline, and role alignment.</p>
          </div>

          <StaggerGroup className="channel-grid">
            {projectStandards.map((item) => (
              <StaggerItem className="channel-card" key={item.label}>
                <span className="channel-badge">Project review</span>
                <h3>{item.label}</h3>
                <p className="muted">{item.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <StaggerGroup className="proof-grid" style={{ marginTop: '1rem' }}>
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
        </StaggerGroup>

        <Reveal className="cta-panel" delay={0.1} style={{ marginTop: '1rem' }}>
          <div>
            <div className="eyebrow">Navigation</div>
            <h2>Return to the broader role case.</h2>
            <p className="muted">The research page explains why this role direction makes sense. The homepage shows how that argument is compressed for a faster review.</p>
          </div>
          <div className="hero-actions">
            <Link className="button primary" to="/focus/research">Read research</Link>
            <Link className="button" to="/">Back to homepage</Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
