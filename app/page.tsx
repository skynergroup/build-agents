function BotIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="8" y="14" width="56" height="46" rx="14" fill="url(#bg)" />
      <rect x="24" y="6" width="24" height="10" rx="5" fill="#1D4ED8" />
      <circle cx="27" cy="36" r="6" fill="#E2E8F0" />
      <circle cx="45" cy="36" r="6" fill="#E2E8F0" />
      <rect x="24" y="48" width="24" height="4" rx="2" fill="#C7D2FE" />
      <defs>
        <linearGradient id="bg" x1="8" y1="14" x2="64" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const cards = [
  ['Support Bot', 'Answers FAQs, captures issues, routes to human support.'],
  ['Sales Bot', 'Qualifies leads and books calls automatically.'],
  ['Ops Bot', 'Runs reminders, follow-ups, and status checks.'],
];

export default function HomePage() {
  return (
    <main className="site">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <BotIcon />
            <div>
              <strong>Build Agents</strong>
              <span>AI workers for African SMEs</span>
            </div>
          </div>
          <button className="btn btn-dark">Start Building</button>
        </div>
      </header>

      <section className="hero container">
        <p className="tag">NO-CODE • BOT-FIRST • SME READY</p>
        <h1>Launch your business bot in minutes.</h1>
        <p>
          Build Agents helps non-technical teams create customer-ready AI bots with simple prompts,
          guardrails, and one-click deployment.
        </p>
        <div className="hero-actions">
          <button className="btn btn-dark">Build My Bot</button>
          <button className="btn btn-light">See Demo</button>
        </div>
      </section>

      <section className="container showcase">
        <div className="chat-demo">
          <h3>Live Bot Preview</h3>
          <div className="bubble user">Need a bot to answer pricing questions.</div>
          <div className="bubble ai">Done. Should I escalate enterprise leads to your sales team?</div>
          <div className="bubble user">Yes, and collect name, email and company.</div>
          <div className="chips">
            <span>WhatsApp Ready</span>
            <span>Human Handoff</span>
            <span>Analytics Included</span>
          </div>
        </div>
      </section>

      <section className="container grid3">
        {cards.map(([title, text]) => (
          <article className="feature" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="container cta">
        <h2>Ready to scale your business with bots?</h2>
        <p>Pick a template, customize in chat, and go live today.</p>
        <button className="btn btn-dark">Start Building</button>
      </section>
    </main>
  );
}
