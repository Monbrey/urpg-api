import { findBestMatch } from "string-similarity";
import { Matched, UrpgClient } from "..";
import { ReadEndpoint } from "./ReadEndpoint";
import { RequestHandler } from "./RequestHandler";

class ReadWriteEndpoint<T> extends ReadEndpoint {
    public constructor(resource: string, client: UrpgClient) {
        super(resource, client);
    }

    public async get(): Promise<string[]>;
    public async get(name?: string): Promise<T>;
    public async get(name?: string) {
        if(!name) return super.get();

        const url = `${this.client.baseUrl}/${this.resource}/${name}`;
        return RequestHandler.handle<T>(url);
    }

    public async getClosest(name: string): Promise<Matched<T>> {
        if(!this.cache) await super.get();

        const { bestMatch } = findBestMatch(name, this.cache);
        return {
            rating: bestMatch.rating,
            value: await this.get(bestMatch.target)
        };

    }

    public static post(): void {
        throw new Error("Not implemented");
    }

    public static put(): void {
        throw new Error("Not implemented");
    }
}

export { ReadWriteEndpoint };

