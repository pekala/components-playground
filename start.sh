#!/usr/bin/env node

var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var rootPath = __dirname;
var playgroundPath = path.join(rootPath, 'tools', 'component-playground');

var compiler = webpack(require(path.join(playgroundPath, 'webpack.config.js')));

var server = new WebpackDevServer(compiler, {
    contentBase: path.join(playgroundPath, 'public'),
    publicPath: '/build/',
    hot: true
});

server.listen(8989, 'localhost', function() {});