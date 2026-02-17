const templates = [
  'Lead Qualification Agent',
  'Customer Support Agent',
  'Appointment & Reminder Agent',
  'Internal FAQ Agent',
  'Operations Follow-up Agent',
  'Personal Admin Agent',
];

const steps = [
  {
    title: 'Describe the job',
    body: 'Tell us in plain language what your agent should handle.',
  },
  {
    title: 'Set guardrails',
    body: 'Choose clear permissions and behavior in simple terms.',
  },
  {
    title: 'Test and deploy',
    body: 'Preview conversations, refine quickly, then launch.',
  },
];

const metrics = [
  { label: 'Time to first deploy', value: '< 10 min' },
  { label: 'No-code setup', value: '100%' },
  { label: 'Template starts', value: '6+' },
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />

      <header className="container nav">
        <div className="logo">Build Agents</div>
        <button className="btn ghost">See examples</button>
      </header>

      <section className="container hero">
        <div className="badge">Built for non-technical teams</div>
        <h1>Build AI agents by describing what you need.</h1>
        <p>
          No coding. No setup headaches. Just explain the task and launch a reliable
          assistant in minutes.
        </p>
        <div className="actions">
          <button className="btn primary">Build my agent</button>
          <button className="btn ghost">Watch 60-second demo</button>
        </div>

        <div className="metrics">
          {metrics.map((item) => (
            <article key={item.label} className="metric">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>From idea to live agent in 3 steps</h2>
        <div className="grid three">
          {steps.map((step, idx) => (
            <article key={step.title} className="card">
              <small>Step {idx + 1}</small>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Start from a template, then customize in chat</h2>
        <div className="grid three">
          {templates.map((template) => (
            <article key={template} className="card template">
              <h3>{template}</h3>
              <p>Pre-built prompt, guardrails, and onboarding flow.</p>
              <a href="#" aria-label={`Use ${template}`}>
                Use template →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="container section split">
        <div>
          <h2>You stay in control</h2>
          <ul>
            <li>Clear permissions in plain English</li>
            <li>Confidence thresholds and handoff rules</li>
            <li>Mandatory test mode before launch</li>
            <li>Editable behavior after deployment</li>
          </ul>
        </div>
        <aside className="panel">
          <h3>Example setup summary</h3>
          <p>
            <strong>Agent:</strong> Support Assistant
          </p>
          <p>
            <strong>Tone:</strong> Professional, concise
          </p>
          <p>
            <strong>Can do:</strong> Answer FAQs, collect ticket details
          </p>
          <p>
            <strong>Cannot do:</strong> Process refunds without approval
          </p>
        </aside>
      </section>

      <section className="container cta">
        <h2>Your first agent can be live today.</h2>
        <p>If you can describe it, you can build it.</p>
        <button className="btn primary">Build my agent</button>
      </section>
    </main>
  );
}
