module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: ["@emotion/babel-plugin", "babel-plugin-macros"],
  overrides: [
    {
      include: ["./node_modules"],
      plugins: [
        [
          "babel-plugin-transform-require-ignore",
          {
            extensions: [".css"],
          },
        ],
      ],
    },
  ],
  // plugins: ["babel-plugin-macros", ["styled-components", { ssr: true }]],
};
