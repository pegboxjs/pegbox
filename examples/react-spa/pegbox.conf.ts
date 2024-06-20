import defineConfig from 'pegbox';
import { config } from 'pegbox';

export default defineConfig(async () => {
    return config({
        entrypoint: 'src/index.tsx'
    })
});
