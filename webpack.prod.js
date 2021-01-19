const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const loaders = require("./webpack.loaders");

loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded" }),
    exclude: ["node_modules"],
});

module.exports = {
    entry: ["./src/index.tsx"],
    output: {
        publicPath: "./",
        path: path.join(__dirname, "public"),
        filename: "[chunkhash].js",
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            styles: path.resolve(__dirname, "styles/"),
        },
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            files: {
                css: ["style.css"],
                js: ["bundle.js"],
            },
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                cache: true,
                parallel: true,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    extractComments: "all",
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
};
