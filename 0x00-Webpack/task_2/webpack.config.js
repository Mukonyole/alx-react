const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,  // Applies to .css files
        use: ['style-loader', 'css-loader'], // Uses both style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  // Applies to image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/', // Output directory for images
            },
          },
        ],
      },
    ],
  },
};
