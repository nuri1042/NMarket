const withImages = require("next-images");

function Images() {
  withImages({
    webpack(config, options) {
      return config;
    },
  });
}
module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        destination: `https://nmarket-ten.vercel.app/:path*`,
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
  Images,
};
