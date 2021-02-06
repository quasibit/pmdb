const withLinaria = require("next-linaria");

module.exports = withLinaria({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  reactStrictMode: true,

  images: {
    domains: process.env.IMAGES_DOMAIN ? [process.env.IMAGES_DOMAIN] : [],
  },
});
