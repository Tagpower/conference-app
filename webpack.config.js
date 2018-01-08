const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // définition des points d'entrée
    // il est possible de définir plusieurs points d'entrée
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
          { test: /\.html$/, use: 'html-loader' },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
    plugins: [new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })]
}