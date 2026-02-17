const highlights = [
  {
    title: 'Answer instantly',
    text: 'Deploy an AI front-desk that handles repetitive queries, captures lead data, and routes urgent cases to humans.',
  },
  {
    title: 'Convert in chat',
    text: 'Run qualification flows in WhatsApp and web chat with branded scripts and clear conversion checkpoints.',
  },
  {
    title: 'Operate with control',
    text: 'Set guardrails, approvals, and escalation logic so every response stays policy-safe and on-brand.',
  },
];

const steps = [
  ['1. Define', 'Describe your use-case in plain language.'],
  ['2. Configure', 'Pick channels, rules, and handoff conditions.'],
  ['3. Launch', 'Go live and monitor performance in one dashboard.'],
];

const integrations = ['WhatsApp', 'Telegram', 'Slack', 'Shopify', 'HubSpot', 'Web Widget'];

export default function HomePage() {
  return (
    <main className="site">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#" aria-label="Build Agents home">
            <span className="brand-dot" aria-hidden />
            <span>Build Agents</span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#workflow">Workflow</a>
            <a href="#integrations">Integrations</a>
            <a href="#trust">Trust</a>
          </nav>
          <button className="btn btn-ghost">Book Demo</button>
        </div>
      </header>

      <section className="hero container" id="trust">
        <p className="eyebrow">BOT OPERATIONS PLATFORM</p>
        <h1>Automate customer conversations without losing human control.</h1>
        <p className="hero-copy">
          Build Agents gives teams a production-ready way to deploy support, sales, and ops bots across
          chat channels — with approvals, escalation rules, and measurable outcomes from day one.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary">Start Free Pilot</button>
          <button className="btn btn-ghost">See Architecture</button>
        </div>

        <div className="hero-proof" role="list" aria-label="Key metrics">
          <div role="listitem">
            <strong>42%</strong>
            <span>faster first response</span>
          </div>
          <div role="listitem">
            <strong>3x</strong>
            <span>more qualified leads</span>
          </div>
          <div role="listitem">
            <strong>99.9%</strong>
            <span>uptime-ready deployment</span>
          </div>
        </div>
      </section>

      <section className="container panel-grid">
        <article className="panel chat-panel">
          <h2>Live command center</h2>
          <p>Preview exactly how the bot handles customer intent and when it escalates to your team.</p>
          <div className="conversation" aria-label="Sample conversation preview">
            <p>
              <span className="who">Customer</span>
              “Need pricing for 30 users and onboarding support.”
            </p>
            <p>
              <span className="who">Agent</span>
              “I can help. Are you looking for monthly or annual billing?”
            </p>
            <p>
              <span className="who">Workflow</span>
              Lead score raised to high-intent. Sales handoff prepared.
            </p>
          </div>
        </article>

        <article className="panel stat-panel" id="workflow">
          <h2>Why teams switch</h2>
          <div className="cards">
            {highlights.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="container steps" aria-label="Three-step workflow">
        {steps.map(([title, text]) => (
          <article key={title} className="step">
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="container integrations" id="integrations">
        <p>Native integrations</p>
        <div>
          {integrations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="container cta">
        <h2>Launch a production bot in under 7 days.</h2>
        <p>Bring support, sales, and operations automation into one governed workflow.</p>
        <button className="btn btn-primary">Request Implementation Plan</button>
      </section>
    </main>
  );
}
