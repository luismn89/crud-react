const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const baseDir = __dirname;
const dist = path.resolve(baseDir, "dist");
const ENV = process.env.NODE_ENV;
const isDev = ENV !== "production";

const javascript = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};
const styles = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: "url-loader",
    },
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: "resolve-url-loader",
      options: {
        keepQuery: true,
      },
    },
    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
        sourceMap: true,
      },
    },
  ],
};

module.exports = {
  mode: ENV,
  entry: "./src/main.js",
  output: {
    path: dist,
    publicPath: dist,
    filename: isDev ? "./js/scripts.js" : "./js/scripts.[hash].js",
  },
  module: {
    rules: [styles, javascript],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "style",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
    minimizer: !isDev
      ? [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true, // set to true if you want JS source maps
            uglifyOptions: {
              ecma: 8,
              warnings: false,
              output: {
                comments: false,
                beautify: false,
              },
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_classnames: undefined,
              keep_fnames: false,
              safari10: true,
            },
          }),
          new OptimizeCSSAssetsPlugin({}),
        ]
      : [],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/main.css`,
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
};
