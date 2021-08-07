import type { Client } from "../client/Client";
import { Species } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
import { RequestHandler } from "../rest/RequestHandler";

export class SpeciesEndpoint extends CrudEndpoint<Species> {
	public constructor(client: Client) {
		super(client, "pokemon");
	}

	// public async create(): Promise<Species> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async update(): Promise<Species> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async delete(): Promise<Species> {
	// 	throw new Error("Method not implemented.");
	// }

	public async fetchRank(name: string): Promise<string[]> {
		const data = await RequestHandler.handle(`${this.url}/rank/${name}`);
		return data;
	}
}
