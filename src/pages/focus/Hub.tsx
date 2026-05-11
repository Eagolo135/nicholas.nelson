import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

const focusSignals = [
  {
    label: 'Research page',
    value: 'Role fit, responsibilities, and evaluation standards',
  },
  {
    label: 'Projects page',
    value: 'Role-aligned proof and placeholder gaps that still need final details',
  },
] as const;

export default function FocusHub() {
  return (
    <>
      <ScrollProgressBar />
      <main className="shell shell-home">
        <header className="topbar">
          <div className="brand">
            <strong>Focus pages</strong>
            <span>{site.person.name}</span>
          </div>
          <nav className="nav" aria-label="Focus navigation">
            <Link to="/">Home</Link>
            <Link to="/focus/research">Research</Link>
            <Link to="/focus/projects">Projects</Link>
          </nav>
        </header>

        <section className="hero" aria-labelledby="focus-hub-title">
          <Reveal className="hero-copy">
            <div className="eyebrow">Additional detail</div>
            <h1 id="focus-hub-title">Research and project detail behind the homepage.</h1>
            <p className="lede">These pages extend the portfolio with role-relevant depth while keeping the homepage concise and recruiter-facing.</p>
            <p className="small">Each page is narrow by design: research explains why the role fits, and projects show the evidence that still needs to become fully verified.</p>

            <div className="section-actions">
              <Link className="button primary" to="/focus/research">
                Open research
              </Link>
              <Link className="button" to="/focus/projects">
                Open projects
              </Link>
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
                  <span className="window-label">Focus page summary</span>
                  <span className="signal-board-status">Two deeper review layers</span>
                </div>

                <div className="signal-board-grid">
                  {focusSignals.map((signal) => (
                    <article className="mini-card signal-panel" key={signal.label}>
                      <span className="mini-card-label">{signal.label}</span>
                      <strong>{signal.value}</strong>
                    </article>
                  ))}

                  <article className="mini-card signal-panel signal-panel-wide">
                    <span className="mini-card-label">Public scope</span>
                    <strong>Resume-relevant detail only.</strong>
                    <p>The focus pages keep the same portfolio rules as the homepage: no framework notes, no meta commentary, and no unsupported claims.</p>
                  </article>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section logo-band">
          <div className="section-head compact">
            <div>
              <div className="eyebrow">Choose a layer</div>
              <h2>Go deeper where it matters.</h2>
            </div>
            <p className="muted">Use research for role fit and use projects for evidence. The split keeps each page easier to review quickly.</p>
          </div>

          <StaggerGroup className="channel-grid">
            {site.focusPages.map((page) => (
              <StaggerItem className="channel-card" key={page.slug}>
                <span className="channel-badge">Focus page</span>
                <h3>{page.title}</h3>
                <p className="muted">{page.summary}</p>
                <Link className="text-link" to={`/focus/${page.slug}`}>
                  Open page
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </main>
    </>
  );
}
