
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',//入口文件
    output: {
        path: path.resolve(__dirname, '../dist'),//出口位置
        filename: 'app.js'//出口文件
    },
    devServer: {//开启服务器
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 9000,
        proxy: {//代理服务器
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to:  path.resolve(__dirname, '../dist/static')
        }])
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [ // loader从后向前使用
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },                    
                    { loader: 'sass-loader' }                    
                ]
            },
            {
                test: /\.html$/,
                use: [ // js中引入html模板
                    { loader: 'string-loader' }                
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                }
            }
        ]
    }
};