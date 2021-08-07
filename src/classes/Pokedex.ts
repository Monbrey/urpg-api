import type { Client } from "../client/Client";
import { PokedexEntry } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class PokedexEndpoint extends CrudEndpoint<PokedexEntry> {
	public constructor(client: Client) {
		super(client, "pokemon");
	}

	// public async create(): Promise<Attack> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async update(): Promise<Attack> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async delete(): Promise<Attack> {
	// 	throw new Error("Method not implemented.");
	// }
}
