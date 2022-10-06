import { Configuration as ConfigurationBase } from "webpack";
import { join } from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { Configuration as ConfigurationDevServer } from "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

type Configuration = ConfigurationDevServer & ConfigurationBase;

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
      alias: {
        "~frontend": process.cwd(),
      },
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
      new ReactRefreshWebpackPlugin(),
    ],
    mode: "development",
    devServer: {
      host: "0.0.0.0",
      client: {
        overlay: false,
      },
      historyApiFallback: true,
      static: join(__dirname, "dist"),
      hot: true,
      devMiddleware: {
        writeToDisk: true,
        publicPath: "/",
      },
      watchFiles: [join(__dirname, "src"), join(__dirname, "dist")],
    },
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
                plugins: [
                  "@emotion/babel-plugin",
                  require.resolve("react-refresh/babel"),
                ],
              },
            },
          ],
        },
      ],
    },
  };
};
export default config;
