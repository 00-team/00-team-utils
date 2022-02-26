import { Configuration } from 'webpack'
import Base from './base'

// path
import { resolve, SRC_DIR, LIB_DIR } from './config/path'

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
}

export default Config
