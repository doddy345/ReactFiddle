const path = require('path');

module.exports = {
    devtool: "#eval-source-map",
    entry: [
	'./src/index.jsx'
    ],
    output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
    },
    module: {
	rules: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		query: {
		    presets: ['es2015', 'react']
		}
	    },
	    {
		test: /\.scss$/,
		use: [
		    {
			loader: "style-loader"
		    },
		    {
			loader: "css-loader",
			options: {
			    modules: true,
			    localIdentName: '[path][name]__[local]--[hash:base64:5]'
			}
		    },
		    {
			loader: "sass-loader"
		    }
		]
	    }
	]
    },
    resolve: {
	extensions: ['.js', '.jsx']
    }
};

