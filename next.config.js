const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withImages = require("next-images");

function Images() {
  withImages({
    webpack(config, options) {
      return config;
    },
  });
}
module.exports = withBundleAnalyzer({
  // process.env.ANALYZE === 'true'이면 실행
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["webimage.10x10.co.kr", "imgstatic.10x10.co.kr"],
  },
  Images,
  // webpack-bundle analyzer settings
  compress: true, // compress: next는 렌더링된 콘텐츠와 정적 파일을 압축하기 위해 gzip 압축을 제공
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    const plugins = [...config.plugins];

    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval", // hidden source map: 배포과정에서 소스코드 노출되지 않도록 적용
      plugins,
    };
  },
});
