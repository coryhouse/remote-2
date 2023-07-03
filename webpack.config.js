const webpack = require("webpack"); // only add this if you don't have yet
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

const buildDate = new Date().toLocaleString();
const devPort = 3002;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/index.ts",
    mode: "development",
    output: {
      publicPath: isProduction
        ? undefined
        : // Required for the historyApiFallback setting to work per https://ui.dev/react-router-cannot-get-url-refresh#webpack--development
          `http://localhost:${devPort}/`,
    },
    devServer: {
      port: devPort,
      open: true,
      // Redirect all requests to index.html so client-side routing works
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: "remote2",
        filename: "remoteEntry.js",
        exposes: {
          // expose each component
          "./RemoteTwo": "./src/RemoteTwo",
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-router-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
