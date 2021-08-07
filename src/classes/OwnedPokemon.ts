import type { Client } from "../client/Client";
import { OwnedPokemon } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class OwnedPokemonEndpoint extends CrudEndpoint<OwnedPokemon> {
	public constructor(client: Client) {
		super(client, "ownedPokemon");
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
