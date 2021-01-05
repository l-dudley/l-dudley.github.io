const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: `${__dirname}/src/index.js`,
    // generate different source maps for dev and production
    devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    // required because the defaults for webpack -p don't remove multiline comments
    optimization:
    process.argv.indexOf('-p') === -1
    ? {}
    : {
        minimize: true,
        minimizer: [
            new TerserPlugin({
            terserOptions: {
                output: {
                comments: false,
                },
            },
            extractComments: false,
            }),
        ],
    },
    // to mimic GitHub Pages serving 404.html for all paths
    // and test spa-github-pages redirect in dev
    devServer: {
        historyApiFallback: {
        rewrites: [{ from: /\//, to: '/404.html' }],
        },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};