import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const ENTRY_POINT = path.resolve(__dirname, "src", "js", "main.js");
const OUTPUT_POINT = path.resolve(__dirname, "build");

const config = {
	entry: [ENTRY_POINT],
	output: {
		path: OUTPUT_POINT,
		filename: "[name].bundle.js",
	},
	devServer: {
		port: 4000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
		}),
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: [{ loader: "pug-loader" }],
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" },
				],
			},
			{
				test: /\.js$/,
				use: [{ loader: "babel-loader" }],
			},
		],
	},
};

export default (env, argv) => {
	if (argv.mode === "development") {
	}
	if (argv.mode === "production") {
	}

	return config;
};
