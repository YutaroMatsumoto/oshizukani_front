/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
]);

module.exports = withTM({
  reactStrictMode: true,
});
