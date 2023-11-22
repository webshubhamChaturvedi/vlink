/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const rewrites = async () => {
  return [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
  ];
};

const nextConfig = {
  rewrites,
  reactStrictMode: false,
  trailingSlash: true,
  redirects: async () => {
    return [
      {
        source: "/content-publishing-system/",
        destination: "/",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_API_URL.split("//")[1].split(":")[0],
        port:
          process.env.NEXT_PUBLIC_API_URL.split("//")[1].split(":")[1] ?? "",
        pathname: "/**/*.{jpg,png,svg,gif,webp,ico}",
      },
    ],
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // },
};
if (process.env.NODE_ENV === "production") {
  nextConfig.compiler = {
    removeConsole: true,
  };
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
