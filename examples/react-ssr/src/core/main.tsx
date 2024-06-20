import express, { Express, Request, Response } from "express";

export interface ServerSetting {
    useHttp2: boolean;
    credentials?: {
        key: string; //fs.readFileSync(path.join(__dirname, 'key.pem'), 'utf8'),
        cert:  string; //fs.readFileSync(path.join(__dirname, 'cert.pem'), 'utf8'),
    };
}

class AppServer {
    private port: number;
    constructor() {}

    public getConfig = async (): Promise<unknown> => {
        return {};
    };

    public setup = async (app: Express): Promise<void> => {}

    // after start
    public start = async (server: Express, isDev: boolean) => {
        server.listen(3000, () => {
            console.log(`listening on port 3000`)
        })
    };
}

export default AppServer;
