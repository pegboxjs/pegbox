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

export const configSSR = (option: {
    entrypoint: {
        main: string;
        client: string;
        server: string;
    }
    plugins?: any[],
    define?: Record<string, string>
}) => {
    return new ConfigSSR();
}

export const configMultiSSR = (option: {
    entrypoint: {
        main: string;
        packages: Record<string, {
            client: string;
            server: string;
            define?: Record<string, string>
        }>
    }
    plugins?: any[],
}) => {
    return new ConfigSSR();
}


abstract class BaseApp {
    public abstract watch(): Promise<void>;
    public abstract build(): Promise<void> 
};

export class ConfigSSR extends BaseApp {
    public watch(): Promise<void> {
        return Promise.resolve();
    }

    public build(): Promise<void> {
        console.log('build')
        return Promise.resolve();
    }
};

export class Config extends BaseApp {
    public watch(): Promise<void> {
        return Promise.resolve();
    }

    public build(): Promise<void> {
        console.log('build')
        return Promise.resolve();
    }
};

//

export type DefineConfigProps = {
    isDev: boolean;
}

export class App {
    private config: (props: DefineConfigProps) => Promise<Config|ConfigSSR>;

    constructor(config: (props: DefineConfigProps) => Promise<Config|ConfigSSR>) {
        this.config = config;
    }

    private validate = async (app: Config | ConfigSSR) => {
        if (app instanceof ConfigSSR || app instanceof Config) {
            return;
        }

        console.error("Config is not valid");
        process.exit(1);
    }

    public build = async () => {
        const app = await this.config({
            isDev: false,
        });

        this.validate(app)

        await app.build();
    }

    public watch = async () => {
        const app = await this.config({
            isDev: true,
        });

        this.validate(app)

        await app.watch();
    }
};

export default (fn: (props: DefineConfigProps) => Promise<Config|ConfigSSR>) => {
    return new App(fn);
}
