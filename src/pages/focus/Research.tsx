import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

const roleDetails = [
  { label: 'What the work is', body: 'Evaluate AI-generated cybersecurity content for accuracy, completeness, and safety. Write clear explanations of what the AI got right or wrong.' },
  { label: 'Why it matters', body: 'AI systems learn from feedback. Security-specific feedback requires domain knowledge that a general reviewer cannot provide.' },
  { label: 'What you bring', body: 'A student who can research threats, reason about code, and explain findings clearly is a strong candidate even without years of experience.' },
  { label: 'Connection to this portfolio', body: 'This portfolio is itself a demonstration: research-driven, structured, honest about skill level, and built to show technical communication.' },
];

export default function Research() {
  return (
    <>
      <ScrollProgressBar />
      <main className="shell">
        <header className="topbar">
          <div className="brand">
            <strong>Research focus</strong>
            <span>{site.direction.currentFocus}</span>
          </div>
          <nav className="nav" aria-label="Focus navigation">
            <Link to="/">Home</Link>
            <Link to="/focus">Focus hub</Link>
            <Link to="/focus/projects">Projects</Link>
            <Link to="/focus/workflow">Workflow</Link>
          </nav>
        </header>

        <Reveal className="panel">
          <div className="eyebrow">Career research</div>
          <h1>Security Engineer – AI Trainer</h1>
          <p className="lede">{site.sections.research}</p>
        </Reveal>

        <div className="section">
          <StaggerGroup className="timeline">
            {roleDetails.map(({ label, body }) => (
              <StaggerItem key={label} className="timeline-entry">
                <span className="timeline-label">{label}</span>
                <p className="timeline-note">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="panel" delay={0.1}>
          <p className="muted">Citations, exact job posting details, and additional research notes will be added here as the project content is finalized.</p>
          <div className="section-actions">
            <Link className="button primary" to="/">Back to homepage</Link>
            <Link className="button" to="/focus/projects">View projects</Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
