import { findBestMatch } from "string-similarity";
import { Matched, UrpgClient } from "..";
import { ReadEndpoint } from "./ReadEndpoint";
import { RequestHandler } from "./RequestHandler";

class ReadWriteEndpoint<T> extends ReadEndpoint {
    private targetStrings;

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
        if(!this.targetStrings) this.targetStrings = this.cache.map(v => v.toLowerCase());

        const { bestMatch } = findBestMatch(name.toLowerCase(), this.targetStrings);
        return {
            rating: bestMatch.rating,
            value: await this.get(this.cache[this.targetStrings.indexOf(bestMatch.target)])
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

