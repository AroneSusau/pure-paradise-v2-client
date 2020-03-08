const path = require('path')
const glob = require('glob')
const PATHS = {
    src: path.join(__dirname, 'src')
}

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const webpack = require('webpack')

module.exports = env => {
    return {
        target: 'web',
        entry: './src/app.ts',
        entry: './src/app.ts',
        devtool: 'hidden-source-map',
        resolve: {
            modules: ['node_modules'],
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(html|ico|png|svg|jpg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist')
        },
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new HtmlWebpackPlugin({}),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css'
            }),
            new PurgecssPlugin({
                paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true})
            }),
            new HtmlCriticalWebpackPlugin({
                base: path.resolve(__dirname, 'dist/'),
                src: '../src/index.html',
                dest: 'index.html',
                inline: true,
                minify: true,
                width: 375,
                height: 565,
                penthouse: {
                    blockJSRequests: false
                }
            }),
            new webpack.DefinePlugin({
                ENVIRONMENT: JSON.stringify(env.NODE_ENV)
            })
        ],
        stats: 'errors-only'
    }
}
