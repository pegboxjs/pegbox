import defineConfig from 'pegbox';
import { configSSR } from 'pegbox';
import type { DefineConfigProps } from 'pegbox';

export default defineConfig(async (props: DefineConfigProps) => {
    console.log({ props: props });

    return configSSR({
        entrypoint: {
            main: 'core/main.tsx',
            client: 'core/client/index.tsx',
            server: 'core/server/index.tsx',
        },
        define: {
            appName: 'my-custom-name'
        },
        plugins:[]
    })
});
