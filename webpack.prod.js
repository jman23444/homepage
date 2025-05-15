import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
});


// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = merge(common, {
//   mode: 'production',
//   plugins: [new CleanWebpackPlugin()],
// });