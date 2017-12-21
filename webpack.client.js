const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


const config = {
  // Tell webpack the root file of our
  // server application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
 module : {
    loaders : [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.(eot|svg|ttf|woff|woff2)$/,loader: 'file-loader?name=/fonts/[name].[ext]"'}
                
    ]
  } 
};

module.exports = merge(baseConfig, config);
