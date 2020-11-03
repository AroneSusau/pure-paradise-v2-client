const path = require('path')
const webpack = require('webpack')

module.exports = env => {
    return {
        target: 'web',
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
                    use: ['style-loader', 'css-loader'],
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
        plugins: [
            new webpack.DefinePlugin({
                ENVIRONMENT: JSON.stringify(env.NODE_ENV)
            })
        ],
        stats: 'errors-only'
    }
}
