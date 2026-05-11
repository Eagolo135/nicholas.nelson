import { Reveal } from '@/components/Reveal';
import { site } from '@/content/site';
import { Link } from 'react-router-dom';

export default function FocusHub() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <strong>Focus pages</strong>
          <span>{site.person.name}</span>
        </div>
        <nav className="nav" aria-label="Focus navigation">
          <Link to="/">Home</Link>
          <Link to="/focus/research">Research</Link>
          <Link to="/focus/projects">Projects</Link>
          <Link to="/focus/workflow">Workflow</Link>
        </nav>
      </header>

      <Reveal className="panel">
        <div className="eyebrow">Tabbed entry point</div>
        <h1>Deeper focus pages</h1>
        <p className="lede">
          These pages are the detailed layers behind the scrollytelling homepage. They help keep the narrative clear while
          allowing each important topic to have its own space.
        </p>
        <div className="focus-grid" style={{ marginTop: '1.5rem' }}>
          {site.focusPages.map((page) => (
            <Link className="focus-card" to={`/focus/${page.slug}`} key={page.slug}>
              <h3>{page.title}</h3>
              <p className="muted">{page.summary}</p>
            </Link>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
