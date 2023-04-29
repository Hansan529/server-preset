const path = require("path");

module.exports = {
	entry: "",
	mode: "development",
	output: {
		filename: "",
		path: path.resolve(__dirname, ""),
	}
	module: {
		rules: [
			{
				test: /\.js$/,
				user: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					}
				}
			}
			{
				test: /\.scss$/,
				user: ["style-loader", "css-loader", "sass-loader"],
			}
		],
	}
}
