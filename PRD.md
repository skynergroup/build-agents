# Build Agents — Product Requirements (v1)

## 1) Product Summary
Build Agents is a no-code web platform where non-technical users create AI agents by chatting in plain language.

Core promise: **"Describe what you need. Get a working agent."**

## 2) Goals
- Let a first-time, non-technical user create and test an agent in under 10 minutes.
- Provide safe, understandable controls for permissions and behavior.
- Drive conversion from visitor → started build → deployed agent.

## 3) Target Users
- Small business owners
- Solo founders
- Operations/admin teams
- Customer support teams
- Busy professionals wanting personal workflow automation

## 4) Jobs To Be Done
- "I want an assistant that answers customer questions."
- "I need help qualifying leads and booking demos."
- "I want a daily follow-up and reminders workflow."
- "I need an internal FAQ bot for my team."

## 5) v1 Scope
### In Scope
1. Landing page with clear value proposition and CTA.
2. Template gallery by use case.
3. Conversational setup wizard.
4. Simple configuration screens:
   - Agent purpose
   - Tone/style
   - Knowledge sources (manual text upload in v1)
   - Channel choice (web chat only for v1)
5. Safety & permissions panel with plain-language toggles.
6. Test sandbox to chat with the agent before deploy.
7. One-click deploy.
8. Basic analytics dashboard:
   - Conversations count
   - Completion/success count
   - Last active time

### Out of Scope (v1)
- Full marketplace
- Multi-channel native integrations
- Team RBAC
- Advanced workflow branching
- Billing complexity beyond basic plan page

## 6) Core User Flow
1. User lands on homepage.
2. Clicks **Build my agent**.
3. Picks a template/use case.
4. Completes guided chat setup.
5. Reviews permissions.
6. Tests in sandbox.
7. Deploys.
8. Sees simple usage metrics.

## 7) UX Principles
- Plain language over technical language.
- One decision per screen.
- Show examples before asking user to write.
- Always include "recommended" defaults.
- Explain risk and permissions in human terms.

## 8) Success Metrics (first 60 days)
- Visitor → Build Start: >12%
- Build Start → Deploy: >35%
- Median time to first deploy: <10 minutes
- D7 retention: >20%

## 9) Risks & Mitigation
- Risk: Users don’t know what to ask for.
  - Mitigation: strong templates + prompt suggestions.
- Risk: Fear of AI mistakes.
  - Mitigation: visible guardrails + test mode required pre-deploy.
- Risk: Setup drop-off.
  - Mitigation: progress indicator + save-and-resume.

## 10) Launch Checklist
- Landing + onboarding QA
- Core templates populated (at least 8)
- Logging + analytics events wired
- Privacy and terms pages published
- Demo video/gif on homepage
