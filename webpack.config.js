/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-03-18 21:48:50
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-03-18 22:36:49
 * @FilePath: /shop/webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  }
};
