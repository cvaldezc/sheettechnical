const path = require("path");
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, './public/js'),
        filename: "[name].bundle.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    }
    // Omit "externals" if you don't have any. Just an example because it's
    // common to have them.
};