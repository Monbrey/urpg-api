import { findBestMatch } from "string-similarity";
import { Client } from "../client/Client";
import { Matched } from "../models";
import { BaseEndpoint } from "./BaseEndpoint";
import { RequestHandler } from "./RequestHandler";
import { castNulls } from "../util/Util";

export abstract class CrudEndpoint<T = unknown> extends BaseEndpoint {
    public constructor(client: Client, resource: string) {
        super(client, resource);
    }

    public async fetch(name: string): Promise<T> {
        const value = await RequestHandler.handle<T>(`${this.url}/${name}`);
        return this.client.nullHandling ? castNulls<T>(value) : value;
    }

    public async fetchClosest(name: string): Promise<Matched<T>> {
        const list = await this.list();
        const { bestMatch: { rating }, bestMatchIndex } = findBestMatch(name.toLowerCase(), list.map(x => x.toLowerCase()));
        const value = await this.fetch(list[bestMatchIndex]);

        return { rating, value: this.client.nullHandling ? castNulls<T>(value) : value }
    }

    public abstract create(): Promise<T>;
    public abstract update(): Promise<T>;
    public abstract delete(): Promise<T>;
}