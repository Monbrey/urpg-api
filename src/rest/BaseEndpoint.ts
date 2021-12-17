import { DateTime } from "luxon";
import { findBestMatch, Rating } from "string-similarity";
import { RequestHandler } from "./RequestHandler";
import type { Client } from "../client/Client";

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

	protected _list: string[];
	protected _listLastFetched: DateTime;

	/**
		 * Constructor which instantiates an Endpoint
		 * @param {Client} client The Client which instatiated and manages this endpoint
		 * @param {string} resource Name of the resource, forming the URL parameter for this endpoint
		 */
	public constructor(client: Client, resource: string) {
		this.client = client;
		this.url = `${this.client.baseUrl}/${resource}`;
	}

	public async list(force?: boolean): Promise<string[]> {
		if (force || !this._list || !this._listLastFetched || this._listLastFetched < DateTime.now().minus({ days: 1 })) {
			this._list = await RequestHandler.handle(this.url, "GET");
			this._listLastFetched = DateTime.now();
		}

		return this._list;
	}

	public async listClosest(query: string, limit = 10, force?: boolean): Promise<Rating[]> {
		const list = await this.list(force);

		const { ratings } = findBestMatch(query, list);
		return ratings.sort((a, b) => b.rating - a.rating).slice(0, limit);
	}
}
