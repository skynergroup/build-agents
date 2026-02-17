import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Agents — No-Code AI Agent Builder',
  description:
    'Create AI agents by describing what you need in plain language. Built for non-technical teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
