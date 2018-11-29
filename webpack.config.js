const path = require("path")
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        common : ['./public/javascripts/common.js'],
        signUp : ['./public/javascripts/signForm.js']
    },
    output: {
        path: __dirname + '/public/__bundles',
        filename: '[name].bundle.js',
        publicPath: '',
    },
    module: {},
    plugins: [],

    // 난독화 추가.
    optimization: {
        minimize: true,
        splitChunks: {},
        concatenateModules: true,
    },

    // webpack 이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션.
    resolve: {

        // node_modules를 넣어야 디렉토리 node_modules를 인식할 수 있다.
        modules: ['node_modules'],

        // 확장자들은 웹팩에서 알아서 처리해 주기 때문에 파일에 extensions에 입력된 확장자들을 입력할 필요가 없다.
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
};