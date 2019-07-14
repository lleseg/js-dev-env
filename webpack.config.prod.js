import path from 'path';
import webpack from 'webpack';
import HtmlWebackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  devtool: 'source-map',
  devServer: {
    noInfo: false,
  },
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor'),
  },
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new WebpackMd5Hash(),
    // Dedupe plugin has been deprecated
    // Uglify has been activated by default in production
    new HtmlWebackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // Propiedades definidas acá se disponibilizan en el index.html
      trackJSToken: '41d1bb4eb7b64741b525abdab01f1d1e',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
