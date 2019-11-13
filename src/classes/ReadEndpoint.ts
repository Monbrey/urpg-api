import { UrpgClient } from "..";
import { RequestHandler } from "./RequestHandler";

class ReadEndpoint {
    /**
     * Name of the resource, and URL parameter for the endpoint
     * @name ReadEndpoint#resource
     * @type {string}
     * @protected
     */
    protected resource: string;

    /**
     * Cached values from the last call to this endpoint
     * @name ReadEndpoint#resource
     * @type {string[]}
     * @protected
     */
    public cache: string[];

    /**
     * The client that instantiated this endpoint
     * @name ReadEndpoint#client
     * @type {UrpgClient}
     * @public
     */
    public client: UrpgClient;

    public constructor(resource: string, client: UrpgClient) {
        this.resource = resource;
        this.client = client;
    }

    /**
     * Sends a GET request to this endpoint
     * Read-only endpoints return a list of all names
     * @returns {string[]}
     */
    public async get(): Promise<string[]> {
        if(this.cache) return this.cache;

        const url = `${this.client.baseUrl}/${this.resource}`;
        this.cache = await RequestHandler.handle(url);

        return this.cache;
    }
}

export { ReadEndpoint };

