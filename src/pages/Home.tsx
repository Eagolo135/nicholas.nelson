import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';
import { type MouseEvent } from 'react';

function makeSectionScroller(id: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

function SocialLinks() {
  return (
    <div className="hero-actions">
      {site.links.github ? (
        <a className="button primary" href={site.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      ) : (
        <span className="button primary">GitHub: pending</span>
      )}

      {site.links.liveSite ? (
        <a className="button" href={site.links.liveSite} target="_blank" rel="noreferrer">
          Live site
        </a>
      ) : (
        <span className="button">Live site: pending</span>
      )}

      {site.links.linkedin ? (
        <a className="button" href={site.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ) : null}
    </div>
  );
}

const proofPillars = [
  {
    kicker: '01',
    title: 'Research-backed security framing',
    body: 'Start with the environment, the threat context, and the actual problem instead of generic security language.',
  },
  {
    kicker: '02',
    title: 'Code-aware evaluation',
    body: 'Use scripting, tooling, and technical reading to evaluate whether a recommendation is practical, risky, or incomplete.',
  },
  {
    kicker: '03',
    title: 'AI-aware technical judgment',
    body: 'Review AI-generated cybersecurity content for technical accuracy, missing assumptions, and whether the explanation can be trusted.',
  },
] as const;

const heroSignals = [
  'Research-led review',
  'Code-aware analysis',
  'AI-aware judgment',
] as const;

const proofSignals = [
  {
    label: 'Research',
    value: 'Threat context, role fit, and accurate framing',
  },
  {
    label: 'Code',
    value: 'Scripting, technical reading, and practical reasoning',
  },
  {
    label: 'Judgment',
    value: 'Evaluate AI output for accuracy, risk, and clarity',
  },
] as const;

const workflowSteps = [
  {
    step: '01',
    title: 'Frame the problem clearly',
    body: 'Start with the environment, the system, and the security context before deciding what matters.',
  },
  {
    step: '02',
    title: 'Evaluate the technical answer',
    body: 'Use research, code awareness, and security reasoning to judge whether the explanation is usable or risky.',
  },
  {
    step: '03',
    title: 'Present concise evidence',
    body: 'Turn the result into clear proof another reviewer can scan quickly and trust more easily.',
  },
] as const;

const stackCloud = [
  ...site.skills.technical,
  ...site.skills.cybersecurity,
  ...site.skills.ai,
  ...site.skills.professional,
] as const;

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <main id="main" className="shell shell-home">
        <header className="topbar">
          <div className="brand">
            <strong>{site.person.name}</strong>
            <span>{site.person.title}</span>
          </div>
          <nav className="nav" aria-label="Primary">
            <a href="#direction" onClick={makeSectionScroller('direction')}>
              Direction
            </a>
            <a href="#research" onClick={makeSectionScroller('research')}>
              Capabilities
            </a>
            <a href="#projects" onClick={makeSectionScroller('projects')}>
              Proof
            </a>
            <a href="#skills" onClick={makeSectionScroller('skills')}>
              Stack
            </a>
            <a href="#contact" onClick={makeSectionScroller('contact')}>
              Contact
            </a>
            <Link to="/focus">Focus pages</Link>
          </nav>
        </header>

        <section className="hero hero-platform" aria-labelledby="hero-title">
          <Reveal className="hero-copy">
            <div className="eyebrow">Cloud Security Engineer - AI Trainer</div>
            <h1 id="hero-title">Evaluating cybersecurity problems with research, code, and AI-aware technical judgment.</h1>
            <p className="lede">{site.person.headline}</p>
            <p className="small">{site.person.summary}</p>

            <div className="section-actions">
              <a className="button primary" href="#projects" onClick={makeSectionScroller('projects')}>
                View proof
              </a>
              <Link className="button" to="/focus/research">
                View research
              </Link>
            </div>

            <SocialLinks />

            <div className="hero-pills">
              <span className="pill">Role target: {site.direction.currentFocus}</span>
              <span className="pill">Project proof: {site.projects.length} featured entries</span>
            </div>
          </Reveal>

          <Reveal className="hero-stage" delay={0.08}>
            <div className="hero-sculpture">
              <div className="hero-sculpture-bg" aria-hidden="true" />
              <div className="hero-sculpture-shell">
                <article className="hero-sculpture-main">
                  <span className="mini-card-label">Primary review lens</span>
                  <strong>Research-backed, code-aware, and AI-aware security evaluation.</strong>
                  <p>{site.direction.shortExplanation}</p>

                  <div className="hero-signal-list" aria-label="Hero signals">
                    {heroSignals.map((signal) => (
                      <span className="status-chip" key={signal}>{signal}</span>
                    ))}
                  </div>
                </article>

                <article className="hero-floating-card hero-floating-card-left">
                  <span className="mini-card-label">Portfolio focus</span>
                  <strong>Role fit and proof</strong>
                  <p>Research, projects, and technical judgment without filler.</p>
                </article>

                <article className="hero-floating-card hero-floating-card-right">
                  <span className="mini-card-label">Current scope</span>
                  <strong>{site.projects.length} featured projects</strong>
                  <p>{site.focusPages.length} deeper pages for research and evidence.</p>
                </article>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section proof-band" aria-labelledby="proof-band-title">
          <div className="section-head compact">
            <div>
              <div className="eyebrow">Core strengths</div>
              <h2 id="proof-band-title">Three signals, one clear direction.</h2>
            </div>
            <p className="muted">The homepage now moves in larger beats so the site reads more like a deliberate portfolio review and less like a dense dashboard.</p>
          </div>
          <StaggerGroup className="proof-band-grid">
            {proofPillars.map((item) => (
              <StaggerItem className="proof-band-card" key={item.title}>
                <span className="feature-kicker">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <div className="section-head">
            <div>
              <div className="eyebrow">Working model</div>
              <h2 id="process-title">How the work is framed.</h2>
            </div>
            <p className="muted">The review pattern stays simple: frame the problem clearly, evaluate the technical answer, then present the result as concise evidence.</p>
          </div>

          <div className="process-grid">
            {workflowSteps.map((item) => (
              <Reveal className="process-step" key={item.step}>
                <span className="feature-kicker">{item.step}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="direction">
          <div className="section-grid">
            <Reveal className="panel span-7">
              <div className="section-title">
                <h2>Professional direction</h2>
                <span className="chip">Target role</span>
              </div>
              <p className="lede">{site.sections.about}</p>
              <p className="muted">{site.direction.shortExplanation}</p>
            </Reveal>

            <Reveal className="panel span-5" delay={0.08}>
              <div className="section-title">
                <h2>Core links</h2>
              </div>
              <div className="build-list">
                <article className="build-step">
                  <strong>Target role</strong>
                  <p className="muted">Cloud Security Engineer - AI Trainer with emphasis on accurate review and clear technical explanation.</p>
                </article>
                <article className="build-step">
                  <strong>Research page</strong>
                  <p className="muted">Role fit, responsibilities, and evaluation standards for the direction this portfolio is built around.</p>
                </article>
                <article className="build-step">
                  <strong>Projects page</strong>
                  <p className="muted">Project evidence aligned to the role, with placeholders kept only where final assignment details still need verification.</p>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="research">
          <div className="section-head">
            <div>
              <div className="eyebrow">Evidence areas</div>
              <h2>What the portfolio is designed to demonstrate.</h2>
            </div>
            <p className="muted">These proof blocks stay focused on the technical habits and review standards that support cloud security work and AI-content evaluation.</p>
          </div>

          <StaggerGroup className="capability-grid">
            {proofSignals.map((item) => (
              <StaggerItem className="capability-card" key={item.label}>
                <span className="feature-kicker">{item.label}</span>
                <h3>{item.value}</h3>
                <p className="muted">
                  {item.label === 'Research'
                    ? 'Role research, threat context, and careful framing before a security claim is made.'
                    : item.label === 'Code'
                      ? 'Technical reading, scripting familiarity, and practical analysis rather than abstract wording.'
                      : 'Security judgment that can evaluate AI-generated explanations for correctness, omissions, and risk.'}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <div>
              <div className="eyebrow">Project proof</div>
              <h2>Featured projects.</h2>
            </div>
            <p className="muted">These projects are here to support the target role. Placeholder text remains only where final assignment details still need verification.</p>
          </div>

          <StaggerGroup className="proof-grid">
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

            <StaggerItem className="project-card project-card-secondary">
              <p className="eyebrow">Direction</p>
              <h3>Why these projects matter</h3>
              <p className="muted">{site.direction.shortExplanation}</p>
              <div className="pill-row">
                {site.focusPages.map((page) => (
                  <Link className="pill" key={page.slug} to={`/focus/${page.slug}`}>
                    {page.title}
                  </Link>
                ))}
              </div>
            </StaggerItem>
          </StaggerGroup>
        </section>

        <section className="section" id="skills">
          <div className="section-grid">
            <Reveal className="panel span-7">
              <div className="section-title">
                <h2>Skills and tools</h2>
                <span className="chip">Technical foundation</span>
              </div>
              <p className="lede">This section stays limited to skills that support the Cloud Security Engineer - AI Trainer direction.</p>
              <div className="stack-cloud">
                {stackCloud.map((item, index) => (
                  <span className="tag" key={`${item}-${index}`}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="panel span-5" delay={0.08}>
              <div className="section-title">
                <h2>Next layers</h2>
                <Link className="chip" to="/focus">
                  Open hub
                </Link>
              </div>
              <div className="focus-grid focus-grid-single">
                {site.focusPages.map((page) => (
                  <Link className="focus-card" key={page.slug} to={`/focus/${page.slug}`}>
                    <h3>{page.title}</h3>
                    <p className="muted">{page.summary}</p>
                  </Link>
                ))}
                <a className="focus-card" href={site.links.github} target="_blank" rel="noreferrer">
                  <h3>GitHub</h3>
                  <p className="muted">Repository history and public project proof.</p>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="contact">
          <Reveal className="cta-panel">
            <div>
              <div className="eyebrow">Professional links</div>
              <h2>Review the portfolio and supporting pages.</h2>
              <p className="muted">The main remaining content task is replacing temporary project placeholder copy with final verified project details.</p>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projects" onClick={makeSectionScroller('projects')}>
                Review proof cards
              </a>
              <Link className="button" to="/focus">
                Open focus hub
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
