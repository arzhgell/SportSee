const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin({
  outputFormat: 'human',
});

module.exports = smp.wrap({
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      illustrations: path.resolve(__dirname, 'src/assets/illustrations/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      navigation: path.resolve(__dirname, 'src/navigation/'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss', '.jsx'],
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: [/\.tsx?$/, /\.js?$/, /\.ts?$/, /\.jsx?$/],
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: [/\.css$/i, /\.scss$/i],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});
