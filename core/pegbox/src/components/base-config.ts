import { Config, ConfigSSR } from '../index';

export class BaseConfig {
    private config: () => Promise<Config|ConfigSSR>;

    constructor(config: () => Promise<Config|ConfigSSR>) {
        this.config = config;
    }

    public run = async () => {
        // build args;
        const app = await this.config();

        if (app instanceof ConfigSSR) {
            return await this.runAppSSR(app as ConfigSSR);
        }

        if (app instanceof Config) {
            return await this.runAppSPA(app as Config);
        }

        console.error("Config is not valid");
        process.exit(1);
        
    }

    private runAppSSR = async (app: ConfigSSR) => {
        return true;
    }

    private runAppSPA = async (app: Config) => {
        return true;
    }
};