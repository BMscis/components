const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Manifest = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        context: path.resolve(__dirname, 'src'),
        app: './src/index.js'
    },
    module: {
        rules: [

            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: [/\.(bin)$/, /\.(png|svg|jpg|gif|glb|gltf|hdr)$/],
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options:{
                        name: '[name]-[hash].[ext]'
                    }
                    }
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ],
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
            // {
            //     test: /\.toml$/,
            //     type: 'json',
            //     parser: {
            //         parse: toml.parse
            //     }
            // },
            // {
            //     test: /\.yaml$/,
            //     type: 'json',
            //     parser: {
            //         parse: yaml.parse
            //     }
            // },
            // {
            //     test: /\.json5$/,
            //     type: 'json',
            //     parser: {
            //         parse: json5.parse
            //     }
            // }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Home',
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};