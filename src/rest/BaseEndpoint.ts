import type { Client } from "../client/Client";
import { RequestHandler } from "./RequestHandler";


export abstract class BaseEndpoint {
    /**
     * Name of the resource, and URL parameter for the endpoint
     * @name BaseEndpoint#url
     * @type {string}
     * @protected
     */
    protected url: string;

    /**
     * The Client which instatiated and manages this endpoint
     * @name BaseEndpoint#client
     * @type {Client}
     * @private
     */
    protected client: Client;

    /**
     * Constructor which instantiates an Endpoint
     * @param {Client} client The Client which instatiated and manages this endpoint
     * @param {string} resource Name of the resource, forming the URL parameter for this endpoint
     */
    public constructor(client: Client, resource: string) {
        this.client = client;
        this.url = `${this.client.baseUrl}/${resource}`;
    }

    public async list(): Promise<string[]> {
        return RequestHandler.handle(this.url, "GET");
    }
}