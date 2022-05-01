import { Configuration } from 'webpack'
import Base from './base'

// path
import { resolve, SRC_DIR, LIB_DIR } from './config/path'

// plugins
import Copy from 'copy-webpack-plugin'

const Config: Configuration = {
    ...Base,
    mode: 'production',
    entry: resolve(SRC_DIR, 'index.ts'),
    output: {
        path: LIB_DIR,
        clean: true,
        filename: 'index.js',
        sourceMapFilename: 'source_maps/[file].map',
        library: {
            name: '@00-team/utils',
            type: 'umd',
            umdNamedDefine: true,
        },
    },
    externals: {
        react: 'react',
    },
    optimization: {
        minimize: true,
        emitOnErrors: false,
    },
    plugins: [
        new Copy({
            patterns: [
                {
                    from: resolve(SRC_DIR, 'sass'),
                    to: resolve(LIB_DIR, 'sass'),
                },
            ],
        }),
    ],
}

export default Config
