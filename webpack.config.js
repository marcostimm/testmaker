var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "public"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/app.js",
	output: {
		path: __dirname + "/public/js/",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: ["babel-loader"],
				query: {
                    presets: ["latest", "stage-0", "react"],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules|bower_components)/,
				loader: "json-loader"
			}
		]
	}
}
