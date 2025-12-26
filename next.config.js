/** @type {import('next').NextConfig} */
const repoName = '2415016099_Erika-A-F_TEKWEB-A_Praktikum-9';

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
