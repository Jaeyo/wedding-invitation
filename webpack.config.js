var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.join(__dirname, '/src/pages/index.jsx'),
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.jsx$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.less$/,
			loaders: ['style-loader', 'css-loader', 'less-loader'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader'],
			include: path.join(__dirname, 'src')
		}]
	}
};
