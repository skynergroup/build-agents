/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only needed for GitHub Pages project sites, not Vercel.
  basePath: isGitHubPages ? '/build-agents' : '',
};

export default nextConfig;
