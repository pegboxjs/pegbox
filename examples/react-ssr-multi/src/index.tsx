import express, { Express, Request, Response } from "express";
import http2 from 'node:http2';

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

    public setup = async (): Promise<unknown> => {
        return {};
    };

    // add common middlewares
    public init = async (app: Express) => {}

    // resolve package name in runtime
    public resolve = async (req: Request): Promise<string> => {
        return '*'
    }

    // after start
    public start = async (server: Express, isDev: boolean) => {
        server.listen(3000, () => {
            console.log(`listening on port 3000`)
        })
    };
}

export default AppServer;
