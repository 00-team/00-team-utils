import { Configuration as MainConfiguration } from 'webpack'
import { Configuration as DevConfiguration } from 'webpack-dev-server'
import Base from './base'

interface Configuration extends MainConfiguration {
    devServer: DevConfiguration
}

// plugins
import HtmlPlugin from 'html-webpack-plugin'

// path
import { DEV_DIR, resolve } from './config/path'

const Config: Configuration = {
    ...Base,
    mode: 'development',
    entry: resolve(DEV_DIR, 'App.tsx'),
    module: {
        rules: [
            ...Base.module!.rules!,
            {
                test: /\.(s?css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        port: 8000,
        hot: true,
        historyApiFallback: true,
        client: {
            logging: 'none',
            reconnect: 7,
        },
    },
    plugins: [
        new HtmlPlugin({
            templateContent: '<div id="root" />',
            // publicPath: '/',
            // minify: false,
        }),
    ],
}

export default Config
