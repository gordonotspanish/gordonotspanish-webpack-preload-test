const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (_env, _argv) => {
    return {
        mode: "development",
        target: ["web", "es5"],
        output: {
            filename: "[name].[contenthash].js",
            chunkFilename: "[id].[contenthash].js",
            path: path.resolve("./", "dist"),
            publicPath: "/"
        },
        resolve: {
            extensions: [".js"]
        },
        plugins: [
            new HtmlWebpackPlugin()
        ]
    };
}