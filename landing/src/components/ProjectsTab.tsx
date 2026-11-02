import Dot from './Dot';
function ProjectsTab() {
  return (
    <section
      className="panel"
      id="panel-projects"
      role="tabpanel"
      aria-labelledby="tab-projects"
    >
      <article className="entry reveal">
        <div className="entry__header">
          <Dot index={0} />
          <div className="entry__heading">
            <span className="entry__title">Blackjack Trainer</span>
            <span className="entry__meta">React · TypeScript</span>
          </div>
          <span className="status status--done">Complete</span>
        </div>
        <p className="entry__desc">
          Practice hit/stand/double decisions against basic strategy, graded
          in real time. The strategy chart is cross-checked against an
          independent expected-value solver rather than just asserted
          correct.
        </p>
        <a
          className="pill entry__pill"
          href="https://landing.starcandy.org/projects/blackjack"
          target="_blank"
          rel="noreferrer"
        >
          View Live ↗
        </a>
        <a
          className="pill entry__pill"
          href="https://github.com/erikwoon/blackjack-trainer"
          target="_blank"
          rel="noreferrer"
        >
          View Code ↗
        </a>
      </article>

      <article className="entry reveal">
        <div className="entry__header">
          <Dot index={1} />
          <div className="entry__heading">
            <span className="entry__title">F1 Data Analytics Project using FastF1 API</span>
            <span className="entry__meta">React, Python, SQL, Supabase, Tableau</span>
          </div>
          <span className="status status--progress">In development</span>
        </div>
        <p className="entry__desc">
          A data analytics project that uses a combination of React, Python, SQL, Supabase, and Tableau to analyze and visualize data.
          This project focuses on leveraging the FastF1 API to fetch and analyze Formula 1 data, and is currently in development.
 
        </p>
        <a
          className="pill entry__pill"
          href="https://github.com/erikwoon/data-analytics-project"
          target="_blank"
          rel="noreferrer"
        >
          View Code ↗
        </a>
      </article>

      <article className="entry reveal">
        <div className="entry__header">
          <Dot index={2} />
          <div className="entry__heading">
            <span className="entry__title">Music Finder</span>
            <span className="entry__meta">
              Java · RoomDB · Spotify &amp; ChatGPT APIs
            </span>
          </div>
          <span className="status status--done">Complete</span>
        </div>
        <p className="entry__desc">
          An Android app for natural-language music discovery.
        </p>
        <a
          className="pill entry__pill"
          href="https://github.com/erikwoon/music-finder"
          target="_blank"
          rel="noreferrer"
        >
          View Code ↗
        </a>
      </article>

      <article className="entry reveal">
        <div className="entry__header">
          <Dot index={3} />
          <div className="entry__heading">
            <span className="entry__title">
              National Security Implications of Contemporary Geo-politics and Threat Intelligence
            </span>
            <span className="entry__meta">
              RMIT University · Industry Awareness Project
            </span>
          </div>
        </div>
        <p className="entry__desc">
          A study of how cyber threat intelligence sharing strengthens a
          nation's response to geopolitical tensions, covering critical
          infrastructure, CTI frameworks and policy recommendations.
        </p>
        <a
          className="pill entry__pill"
          href="/research_paper.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Read PDF ↗
        </a>
      </article>

      <a
        className="see-more"
        href="https://github.com/erikwoon"
        target="_blank"
        rel="noreferrer"
      >
        See more on GitHub ↗
      </a>
    </section>
  );
}

export default ProjectsTab;
