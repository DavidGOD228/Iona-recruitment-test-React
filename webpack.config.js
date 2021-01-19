/* webpack.config.js */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
    devtool: "cheap-module-source-map",
    // Tell webpack to begin building its
    // dependency graph from this file.
    entry: path.join(__dirname, "src", "index.tsx"),
    // And to place the output in the `build` directory
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "public", "index.html"),
        }),
    ],
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        public: "",
        contentBase: "./src/public",
        hot: true,
        disableHostCheck: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 500, // delay before reloading
            poll: 1000, // enable polling since fsevents are not supported in docker
        },
    },
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    },
};
