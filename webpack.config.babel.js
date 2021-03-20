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
		rules: [],
	},
	plugins: [],
};
