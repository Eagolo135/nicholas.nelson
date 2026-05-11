import { Reveal, ScrollProgressBar, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

const workflowSteps = [
  { label: 'Research and role discovery', body: 'AI was used to understand what a Security Engineer – AI Trainer actually does, what skills matter, and what distinguishes a strong candidate.' },
  { label: 'Portfolio direction', body: 'AI helped evaluate whether the Sage-Creator archetype fit the target role, and what the portfolio should prove to a professor or recruiter.' },
  { label: 'Writing and clarity', body: 'Draft copy was generated, then reviewed and edited to remove anything that sounded exaggerated, vague, or inaccurate.' },
  { label: 'Decision-making', body: 'AI was used to compare wording options and stress-test whether the message stayed believable throughout the site.' },
  { label: 'What AI did not do', body: 'AI did not invent project details, claim experience that does not exist, or make design decisions without review.' },
];

export default function Workflow() {
  return (
    <>
      <ScrollProgressBar />
      <main className="shell">
        <header className="topbar">
          <div className="brand">
            <strong>Workflow focus</strong>
            <span>Intentional AI use</span>
          </div>
          <nav className="nav" aria-label="Focus navigation">
            <Link to="/">Home</Link>
            <Link to="/focus">Focus hub</Link>
            <Link to="/focus/research">Research</Link>
            <Link to="/focus/projects">Projects</Link>
          </nav>
        </header>

        <Reveal className="panel">
          <div className="eyebrow">AI workflow</div>
          <h1>How AI was used</h1>
          <p className="lede">{site.sections.aiWorkflow}</p>
        </Reveal>

        <div className="section">
          <StaggerGroup className="timeline">
            {workflowSteps.map(({ label, body }) => (
              <StaggerItem key={label} className="timeline-entry">
                <span className="timeline-label">{label}</span>
                <p className="timeline-note">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="panel" delay={0.1}>
          <div className="section-actions">
            <Link className="button primary" to="/">Back to homepage</Link>
            <Link className="button" to="/focus/projects">View projects</Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
