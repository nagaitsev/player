/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
    output: 'export',
    basePath: isGitHubPages ? '/player' : '',
    trailingSlash: true,
};

export default nextConfig;
