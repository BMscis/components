const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require('webpack');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const glob = require('glob')
module.exports = {
    entry: {
        entry:glob.sync('./src/entry/index.js'),
        fonts:glob.sync('./src/assets/fonts/*.otf'),
        style:glob.sync('./src/**/*.scss'),
        blockchain:glob.sync('./src/blockchain/**/*.{js,ts}'),
        images:glob.sync('./src/assets/img/*.{gif,jpg,png}'),
        preloadImages:('./src/assets/img/ws382.jpg'),
        es_components:glob.sync('./src/components/**/*.js'),
        es_workers:glob.sync('./src/workers/**/*.js'),
    },
    module: {
        rules: [
            //scss
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
            //files
            {
                test: [/\.(bin)$/, /\.(png|svg|jpg|gif|glb|gltf|hdr)$/],
                use: [
                    'file-loader',
                ],
            },
            //fonts
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
            //data
            // {
            //     test: /\.(csv|tsv)$/,
            //     use: [
            //         'csv-loader',
            //     ],
            // },
            //data
            // {
            //     test: /\.xml$/,
            //     use: [
            //         'xml-loader',
            //     ],
            // },
            //Typescript
            {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: [/node_modules/,"/src/components/","/src/Classes/"],
            }

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
     resolve: {
         extensions: ['.tsx','.ts','.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Home',
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
         new PreloadWebpackPlugin({
             rel: 'preload',
             include:{
                 type:'asyncCHunks',
                 entries:['preloadImages', 'style','emtry']
             }
           }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            "window.jQuery": "jquery"
        }),
        new FaviconsWebpackPlugin({
            logo:path.resolve(__dirname,"./src/assets/svg/espiifavicon2.svg"),
            favicons:{
                appName:"Espii Club",
                appDescription:"Development Platform for the Espii Corporation",
                developerName:"BMscis",
                developerURL:"https://bmscis.github.io",
                background:"transparent",
                theme_color:"#F44336"
            },
            inject: true,
        }),
        new WebpackManifestPlugin()
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'docs'),
    },
    optimization: {
        minimize:true,
        moduleIds: 'named',
        runtimeChunk: 'single',
        removeAvailableModules:true,
        removeEmptyChunks:true,
        mergeDuplicateChunks:true,
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
