function ContactTab() {
  return (
    <section
      className="panel"
      id="panel-contact"
      role="tabpanel"
      aria-labelledby="tab-contact"
    >
      <div className="contact-links">
        <a
          className="pill"
          href="https://github.com/erikwoon"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="pill"
          href="https://linkedin.com/in/erikwoon"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>

      <article className="entry reveal">
        <div className="entry__header">
          <span className="badge badge--teal" aria-hidden="true">
            SEC
          </span>
          <div className="entry__heading">
            <span className="entry__title">This site is hardened</span>
            <span className="entry__meta">source in the repo below</span>
          </div>
        </div>
        <p className="entry__desc">
          A strict Content-Security-Policy plus X-Frame-Options,
          X-Content-Type-Options and Referrer-Policy headers on every
          response, a published{' '}
          <a
            className="inline-link"
            href="/.well-known/security.txt"
            target="_blank"
            rel="noreferrer"
          >
            security.txt
          </a>{' '}
          (RFC 9116) for responsible disclosure, and immutable-cached,
          R2-backed image delivery through a purpose-built Cloudflare
          Worker that only ever sees the one route it needs to.
        </p>
        <a
          className="pill entry__pill"
          href="https://github.com/erikwoon/homepage"
          target="_blank"
          rel="noreferrer"
        >
          View Source ↗
        </a>
      </article>
    </section>
  );
}

export default ContactTab;
