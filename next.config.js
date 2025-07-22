/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用 React 严格模式
  reactStrictMode: true,

  // 保持静态导出
  output: 'export',

  // 禁用图片优化功能
  images: {
    unoptimized: true, // 禁用图片优化以兼容静态导出
  },

  // 启用 Source Maps 支持
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

module.exports = nextConfig;
