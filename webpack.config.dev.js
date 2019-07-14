import path from 'path';
import webpack from 'webpack';
import HtmlWebackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  devServer: {
    noInfo: false,
  },
  entry: [path.resolve(__dirname, 'src/index')],
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new HtmlWebackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
};
