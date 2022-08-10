import { Configuration } from "webpack";
import { join } from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
const config = (): Configuration => {
  return {
    entry: "./src/index.tsx",
    devtool: "source-map",
    target: "web",
    output: {
      path: join(__dirname, "dist"),
      filename: "index.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".tsx", ".jsx", ".ts", ".json", ".wasm", ".mjs"],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: join(__dirname, "public", "index.html"),
            to: join(__dirname, "dist"),
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js|tsx|jsx)$/,
          include: join(__dirname, "src"),
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    { bugfixes: true, useBuiltIns: "usage", corejs: "3" },
                  ],
                  "@babel/preset-typescript",
                  ["@babel/preset-react", { runtime: "automatic" }],
                ],
                plugins: ["@emotion/babel-plugin"],
              },
            },
          ],
        },
      ],
    },
  };
};
export default config;
