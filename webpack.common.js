const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Manifest = require('webpack-manifest-plugin');
const webpack = require('webpack');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const glob = require('glob')

module.exports = {
    entry: {
        fonts:glob.sync('./src/assets/fonts/*.otf'),
        style:glob.sync('./src/*.scss'),
        images:glob.sync('./src/assets/img/*.{gif,jpg,png}'),
        preloadImages:('./src/assets/svg/ws38.jpg'),
        es_components:glob.sync('./src/components/**/*.js')
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
            template:'./src/index.html'
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include:{
                type:'asyncCHunks',
                entries:['preloadImages', 'style']
            }
          }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            "window.jQuery": "jquery"
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'docs'),
    },
    optimization: {
        moduleIds: 'deterministic',
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