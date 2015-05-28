var path = require('path'),
    argv = require('yargs').argv,
    webpack = require('webpack');

var playgroundPath = __dirname,
    rootPath = path.join(playgroundPath, '../..'),
    modulesPath = path.join(rootPath, 'node_modules'),
    cwd = process.cwd();

var resolvePath = function(userPath) {
    return path.resolve(cwd, userPath);
};

module.exports = {
    context: playgroundPath,
    entry: [
        'webpack-dev-server/client?http://localhost:8989',
        'webpack/hot/dev-server',
        './entry'
    ],
    resolve: {
        alias: {
            components: resolvePath(argv.componentsPath || 'components'),
            fixtures: resolvePath(argv.fixturesPath || 'fixtures')
        },
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        root: modulesPath
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.md$/, 
            loader: "html!markdown"
        },
        {
            test: /\.po$/, 
            loader: 'json!po'
        }]
    },
    output: {
        libraryTarget: 'umd',
        library: 'cosmosRouter',
        path: path.join(playgroundPath, 'public', 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};