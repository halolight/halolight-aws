// ============================================================================
// AWS Amplify 部署配置
// ============================================================================
const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 安全：移除 X-Powered-By 响应头
  poweredByHeader: false,

  // 打包优化
  compiler: {
    // 移除 console.log（生产环境）
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },

  // 实验性功能
  experimental: {
    // 优化包导入 - 减少打包体积
    optimizePackageImports: [
      "@radix-ui/react-icons",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-avatar",
      "@radix-ui/react-context-menu",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-label",
      "@radix-ui/react-popover",
      "@radix-ui/react-scroll-area",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
      "@radix-ui/react-switch",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "lucide-react",
      "framer-motion",
      "@tanstack/react-query",
      "recharts",
      "date-fns",
      "zustand",
    ],
    // 启用服务端 Actions
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // 图片优化
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // AWS Amplify 支持图片优化
    unoptimized: false,
    // 远程图片域名白名单
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
      },
    ],
  },

  // 压缩优化
  compress: true,

  // 生产环境 source map 关闭以减小体积和首包下载
  productionBrowserSourceMaps: false,

  // 静态资源缓存
  headers: async () => [
    {
      source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/fonts/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],

  // 重定向和重写规则
  async redirects() {
    return [
      // 旧路由重定向示例
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },

  // 忽略构建时的 ESLint 错误（CI 中单独检查）
  eslint: {
    // 仅在 CI 环境忽略，本地开发保持检查
    ignoreDuringBuilds: process.env.CI === "true",
  },

  // 忽略 TypeScript 构建错误（CI 中单独检查）
  typescript: {
    // 仅在 CI 环境忽略，本地开发保持检查
    ignoreBuildErrors: process.env.CI === "true",
  },

  // 暴露部署环境信息到客户端（用于调试和环境判断）
  env: {
    // 部署平台标识
    NEXT_PUBLIC_DEPLOY_PLATFORM: "amplify",
    // Git 信息（仅在非生产环境暴露，避免泄露私有仓库信息）
    // 如需在生产环境显示，可设置 NEXT_PUBLIC_SHOW_GIT_INFO=true
    ...((!isProduction || process.env.NEXT_PUBLIC_SHOW_GIT_INFO === "true") && {
      NEXT_PUBLIC_GIT_BRANCH: process.env.GIT_BRANCH || "",
      NEXT_PUBLIC_GIT_COMMIT_SHA: process.env.GIT_COMMIT_SHA
        ? process.env.GIT_COMMIT_SHA.slice(0, 7)
        : "",
    }),
  },
};

export default nextConfig;
