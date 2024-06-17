import { BaseConfig } from './components/base-config';

export type ConfigType = {
    [key: string]: any
};

export class ConfigSSR {};

export const configSSR = () => {
    return new ConfigSSR();
}

export class Config {};

export const config = (option: {
    entrypoint: string;
    plugins?: any[],
    build?: {
        outDir: string,
        assetsDir: string
    }
}) => {
    return new Config();
}

export const defineConfig = (fn: () => Promise<Config|ConfigSSR>) => {
    return new BaseConfig(fn);
}

export default defineConfig;