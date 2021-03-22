import webpack from "webpack";
import path from "path";

export default {
	mode: "none",
	entry: "./src/js/main.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "build/js"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{ loader: "babel-loader" }],
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" },
				],
			},
		],
	},
	plugins: [],
};
