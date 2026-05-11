import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <ScrollProgressBar />
      <main className="shell">
        <header className="topbar">
          <div className="brand">
            <strong>Project focus</strong>
            <span>Proof of direction</span>
          </div>
          <nav className="nav" aria-label="Focus navigation">
            <Link to="/">Home</Link>
            <Link to="/focus">Focus hub</Link>
            <Link to="/focus/research">Research</Link>
            <Link to="/focus/workflow">Workflow</Link>
          </nav>
        </header>

        <Reveal className="panel">
          <div className="eyebrow">Featured projects</div>
          <h1>Proof of direction</h1>
          <p className="lede">Each project below is chosen to demonstrate something about the Security Engineer – AI Trainer direction, not just to fill a requirement.</p>
        </Reveal>

        <StaggerGroup className="focus-grid" style={{ marginTop: '1rem' }}>
          {site.projects.map((project) => (
            <StaggerItem className="project-card" key={project.slug}>
              <p className="eyebrow">{project.status}</p>
              <h2 style={{ fontSize: '1.6rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>{project.name}</h2>
              <p className="muted">{project.description}</p>
              <ul>
                {project.proof.map((proof) => (
                  <li key={proof}>{proof}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="panel" delay={0.1} style={{ marginTop: '1rem' }}>
          <div className="section-actions">
            <Link className="button primary" to="/">Back to homepage</Link>
            <Link className="button" to="/focus/research">Read research</Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
