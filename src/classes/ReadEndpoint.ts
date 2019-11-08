import { UrpgClient } from "..";
import { RequestHandler } from "./RequestHandler";

class ReadEndpoint {
    protected resource: string;
    protected cache: string[];

    public client: UrpgClient;

    public constructor(resource: string, client: UrpgClient) {
        this.resource = resource;
        this.client = client;
    }

    public async get(): Promise<string[]> {
        if(this.cache) return this.cache;

        const url = `${this.client.baseUrl}/${this.resource}`;
        this.cache = await RequestHandler.handle(url);

        return this.cache;
    }
}

export { ReadEndpoint };

