import defineConfig from 'pegbox';
import { configMultiSSR } from 'pegbox';
import pluginReactMultiSsr from '@pegboxjs/plugin-react-multi-ssr';

export default defineConfig(async (args: unknown | undefined) => {
    console.log({
        defineConfig: 
    })
    return configMultiSSR({
        entrypoint: {
            main: './src/main.tsx',
            packages: {
                "desktop": {
                    client: 'core/client/index.tsx',
                    server: 'core/server/index.tsx',
                    define: {
                        appName: 'my-custom-name'
                    },
                },
                "mobile":  {
                    client: 'core/client/index.tsx',
                    server: 'core/server/index.tsx',
                    define: {
                        appName: 'my-custom-name'
                    },
                }
            }
        },
        plugins: [
            pluginReactMultiSsr()
        ]
    })
});
