export class AppSSR {}

export class AppSPA {}

export class AppMF {}

export abstract class BaseApp {
    public abstract watch(): Promise<void>;
    public abstract build(): Promise<void> 
};