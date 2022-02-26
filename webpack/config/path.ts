import { resolve } from 'path'

const BASE_DIR = resolve(__dirname, '../../')
const SRC_DIR = resolve(BASE_DIR, 'src')
const LIB_DIR = resolve(BASE_DIR, 'lib')
const DEV_DIR = resolve(BASE_DIR, 'dev')

export { BASE_DIR, LIB_DIR, DEV_DIR, SRC_DIR, resolve }
