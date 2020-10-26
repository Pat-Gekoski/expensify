const path = require('path');

module.exports = (env, argv) => {
	// const isProduction = env === 'production';
	const MiniCssExtractPlugin = require('mini-css-extract-plugin');

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js',
		},
		mode: 'development',
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
						},
					},
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
			],
		},
		plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
		devtool: argv.mode === 'production' ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/',
		},
	};
};
