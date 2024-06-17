import { defineConfig } from 'veva';
import { config, configSSR, configModule, } from 'veva/config';
import pluginReact from "@vevajs/plugin-react";

import pluginReactSSR from "@vevajs/plugin-react-ssr";
import pluginCustom from "@vevajs/plugin-custom-ssr";

// Builder
class Buider {}
const configSSR = (options: Options) => {
    const instance = new Buider();
    return instance;
}
type DefineConfigOptions = () => Promise<Buider>;

const defineConfig = (fn: DefineConfigOptions) => {
    return fn();
};

// Config options
class BasePluginSsr {}
type PluginResult = (builder: Buider) => Promise<BasePluginSsr>;
type Options = {
    entrypoint: string;
    build: {
        outDir: string;
        assetsDir: 'assets',
    }
    plugins: Array<PluginResult>;
} 

// Plugins
const pluginReactSSR = (): PluginResult => {

    return async (builder: Buider) => {
        return new BasePluginSsr();
    }
}


export default defineConfig(async () => {
    // custom logic here
    return configSSR({
        entrypoint: 'src/index.ts', 
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
        },
        plugins: [
            pluginReactSSR()
        ],
    });
});




// export default defineConfig(async () => {
//     // custom logic here
//     return configSSR({
//         entrypoint: 'src/index.ts', 
//         build: {
//             outDir: 'dist',
//             assetsDir: 'assets',
//         },
//         plugins: [
//             pluginReactSSR({
//                 desktop: {
//                     clinet: 'src/index.tsx',
//                     server: 'src/index.tsx',
//                     defines: {
//                         __DEV__: true,
//                     },
//                 },
//                 mobile: {
//                     clinet: 'src/index.tsx',
//                     server: 'src/index.tsx',
//                     defines: {
//                         __DEV__: true,
//                     },
//                 },
//             }),
//             pluginCustom()
//         ],
//     },
// });


// const spa = defineConfig(async () => {
//     // custom logic here
//     return config({
//         server: {
//             port: 3000,
//             host: '0.0.0.0',
//             proxy: {
//                 '/api': {
//                     target: 'http://localhost:8080',
//                 },
//             },
//             open: true,
//             cors: true,
                
//         },
//         build: {
//             outDir: 'dist',
//             assetsDir: 'assets',
//         },
//         plugins: [
//             pluginReact({
//                 entrypoint: 'src/index.ts',
//             }),
//         ],
//     },
// });

