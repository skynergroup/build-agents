const steps = [
  {
    title: 'Describe your workflow',
    body: 'Tell Build Agents what you want done, in plain language.',
  },
  {
    title: 'Confirm boundaries',
    body: 'Set tone, permissions, and handoff rules with simple controls.',
  },
  {
    title: 'Test and launch',
    body: 'Preview real conversations, then deploy when ready.',
  },
];

const useCases = [
  'Customer support',
  'Lead qualification',
  'Team knowledge assistant',
  'Booking and reminders',
  'Operations follow-ups',
  'Personal admin',
];

const faqs = [
  {
    q: 'Do I need to code?',
    a: 'No. Everything is configured through guided chat and simple options.',
  },
  {
    q: 'Can I control what the agent can do?',
    a: 'Yes. You decide capabilities, limits, and when to hand off to a human.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams launch their first agent in under 10 minutes.',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="container nav">
          <div className="logo">Build Agents</div>
          <div className="nav-actions">
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
            <button className="btn btn-dark">Build my agent</button>
          </div>
        </nav>
      </header>

      <section className="hero container">
        <p className="eyebrow">No-code AI for everyday teams</p>
        <h1>Build AI agents by describing what you need.</h1>
        <p className="hero-sub">
          No complex setup. No engineering bottlenecks. Just explain the task and
          launch a reliable agent in minutes.
        </p>
        <div className="hero-actions">
          <button className="btn btn-dark">Build my agent</button>
          <button className="btn btn-light">See live example</button>
        </div>

        <div className="hero-panel">
          <div className="panel-row">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <h3>Agent setup preview</h3>
          <div className="chat user">I need an assistant to answer product FAQs.</div>
          <div className="chat ai">Great. Should it escalate billing issues to humans?</div>
          <div className="chat user">Yes, and capture lead details automatically.</div>
        </div>
      </section>

      <section id="how" className="section container">
        <h2>From idea to live agent in three steps</h2>
        <div className="grid three">
          {steps.map((step, index) => (
            <article className="card" key={step.title}>
              <p className="step">Step {index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div>
            <h2>Designed for non-technical users</h2>
            <p className="muted">
              Start with a proven template, then tailor behavior through conversation.
              You stay in control with clear permissions and testing before launch.
            </p>
            <ul className="list">
              {useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="summary">
            <h3>Example configuration</h3>
            <p><strong>Agent:</strong> Support Assistant</p>
            <p><strong>Tone:</strong> Clear, professional</p>
            <p><strong>Allowed:</strong> FAQs, ticket capture, routing</p>
            <p><strong>Blocked:</strong> Refund approvals without human review</p>
          </aside>
        </div>
      </section>

      <section id="faq" className="section container">
        <h2>Frequently asked questions</h2>
        <div className="grid">
          {faqs.map((item) => (
            <article className="faq" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta">
        <h2>Your first agent can be live today.</h2>
        <p>If you can describe it, you can build it.</p>
        <button className="btn btn-dark">Build my agent</button>
      </section>
    </main>
  );
}
