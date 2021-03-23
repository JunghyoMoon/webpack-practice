import webpack from "webpack";
import path from "path";

const ENTRY_POINT = path.resolve(__dirname, "src", "js", "main.js");
const OUTPUT_POINT = path.resolve(__dirname, "build");

export default {
	mode: "none",
	entry: [ENTRY_POINT],
	output: {
		path: OUTPUT_POINT,
		filename: "app.bundle.js",
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
