const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('[name].bundle-[hash].css');

module.exports = {    
    entry: {
        app: './src/index.jsx'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template : './src/index.html'
        }),
        extractCSS
    ],

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(?:css|scss)/,
            use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        { 
                            loader: 'css-loader',
                            options: { minimize: false } 
                        },{ 
                            loader: 'sass-loader',
                            options: { minimize: false } 
                        }]
            })            
        }
        ]
    },

    output: {
        filename: '[name].bundle-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    /*externals: {
        'react': 'React'
    },*/

    resolve: {
        extensions: ['*', '.js', '.jsx'],        
        alias: {
            cutils: path.resolve(__dirname, 'src/Components/Utils')
        }
    }
};