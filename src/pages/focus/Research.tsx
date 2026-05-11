import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

const researchSignals = [
  'Cloud security fit',
  'AI evaluation standards',
  'Risk-based review',
  'Clear technical writing',
] as const;

const roleDetails = [
  {
    label: 'Role scope',
    body: 'Evaluate AI-generated cybersecurity content for technical accuracy, completeness, and safety, especially where cloud and infrastructure topics are involved.',
  },
  {
    label: 'Why it matters',
    body: 'Security feedback for AI systems has to be technically correct. In cloud environments, incomplete guidance can create real operational risk.',
  },
  {
    label: 'Current fit',
    body: 'This portfolio shows student-level work in security concepts, scripting, research, and technical communication, with an emphasis on careful review rather than unsupported claims.',
  },
  {
    label: 'Next upgrade',
    body: 'The next content upgrade is adding final project details and stronger cloud-specific proof so the public work matches the target role more directly.',
  },
] as const;

export default function Research() {
  return (
    <>
      <ScrollProgressBar />
      <main className="shell shell-home">
        <header className="topbar">
          <div className="brand">
            <strong>Research focus</strong>
            <span>{site.direction.currentFocus}</span>
          </div>
          <nav className="nav" aria-label="Focus navigation">
            <Link to="/">Home</Link>
            <Link to="/focus">Focus hub</Link>
            <Link to="/focus/projects">Projects</Link>
          </nav>
        </header>

        <section className="hero" aria-labelledby="research-title">
          <Reveal className="hero-copy">
            <div className="eyebrow">Career research</div>
            <h1 id="research-title">Cloud Security Engineer - AI Trainer</h1>
            <p className="lede">{site.sections.research}</p>
            <p className="small">This page keeps the role explanation compact and evidence-oriented so it supports the portfolio instead of drifting into general notes.</p>

            <div className="hero-pills">
              {researchSignals.map((signal) => (
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
                  <span className="window-label">Research summary</span>
                  <span className="signal-board-status">Role-fit review</span>
                </div>

                <div className="signal-board-grid">
                  <article className="mini-card signal-panel signal-panel-wide">
                    <span className="mini-card-label">What this page answers</span>
                    <strong>Why this role fits the portfolio direction.</strong>
                    <p>The research case is based on technical accuracy, cloud awareness, AI evaluation, and the ability to explain security reasoning clearly.</p>
                  </article>

                  <article className="mini-card signal-panel">
                    <span className="mini-card-label">Current emphasis</span>
                    <strong>Accuracy before automation</strong>
                  </article>

                  <article className="mini-card signal-panel">
                    <span className="mini-card-label">Evidence gap</span>
                    <strong>Cloud-specific project detail still needs verification</strong>
                  </article>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Role breakdown</div>
              <h2>What this direction depends on.</h2>
            </div>
            <p className="muted">The role is attractive because it combines cloud security judgment with the review discipline needed to evaluate AI-generated technical content.</p>
          </div>

          <StaggerGroup className="capability-grid">
            {roleDetails.map(({ label, body }) => (
              <StaggerItem key={label} className="capability-card">
                <span className="feature-kicker">{label}</span>
                <p className="muted">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Reveal className="cta-panel" delay={0.1}>
          <div>
            <div className="eyebrow">Next page</div>
            <h2>Move from role fit to project proof.</h2>
            <p className="muted">Projects are the practical side of this case. They still need final detail, but they already define what evidence belongs in the portfolio.</p>
          </div>
          <div className="hero-actions">
            <Link className="button primary" to="/focus/projects">View projects</Link>
            <Link className="button" to="/">Back to homepage</Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
