import express, { Express, Request, Response } from "express";

export interface ServerSetting {
    useHttp2: boolean;
    credentials?: {
        key: string; //fs.readFileSync(path.join(__dirname, 'key.pem'), 'utf8'),
        cert:  string; //fs.readFileSync(path.join(__dirname, 'cert.pem'), 'utf8'),
    };
}

export class Server {
    private port: number;
    constructor() {}

    public setup = async (): Promise<unknown> => {

        return {};
    };

    public init = async (app: Express) => {
        
    }

    public start = async () => {};
}