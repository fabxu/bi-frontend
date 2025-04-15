import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import banner from 'vite-plugin-banner'
import cssnano from 'cssnano'
import visualizer from 'rollup-plugin-visualizer';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { license, name, version} from './package.json'

const extnedsPlugins = [];

function getBanner(banner, pkg) {
    if (!banner || typeof banner === 'string') {
        return banner || '';
    }

    banner = {...pkg, ...(banner === true ? {} : banner)};

    const author =banner.author

    const license = banner.license || '';
    return (
        '/*!\n' +
        ' * FormCreate 可视化表单设计器\n' +
        ` * ${author || ''}\n *\n` +
        (license && ` * Released under the ${license} License.\n`) +
        ' */'
    );
}

const __banner__ = {
    author: `Original github https://github.com/xaboy/form-create-designer\n * New repository https://gitlab.senseauto.com/bi-lowcode/frontend/form-create-designer`,
    license,
    name,
    version
}

// 打包生产环境才引入的插件
// if (process.env.NODE_ENV === 'production') {
//     // 打包依赖展示
//     extnedsPlugins.push(
//         visualizer({
//             open: true,
//             gzipSize: true,
//             brotliSize: true,
//         })
//     );
// }

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'examples/render-main.js',
            name: 'FcDesignerPortal',
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                }
            },
            external: [
                'vue',
                'element-plus',
                '@form-create/element-ui'
            ],

        },
        brotliSize: true
    },
    css: {
        postcss: {
            plugins: [
                cssnano({
                    preset: 'advanced'
                })
            ]
        }
    },
    plugins: [vue(),  vueJSX(), banner(getBanner(__banner__)),cssInjectedByJsPlugin(), ...extnedsPlugins]
})
