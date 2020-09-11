const HtmlWebPackPlugin              = require('html-webpack-plugin');
const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TercerPlugin                   = require('terser-webpack-plugin');
const { CleanWebpackPlugin }         = require('clean-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new  OptimizeCssAssetsWebpackPlugin(), new TercerPlugin() ],
        minimize: true,
    },
    output: {
        filename: 'main.[contentHash].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false
                },
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
              { from: 'src/assets', to: 'assets/'},
            ],
          }),
        new CleanWebpackPlugin(),
    ]
}