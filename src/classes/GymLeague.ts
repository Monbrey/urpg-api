import type { Client } from "../client/Client";
import { GymLeague } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class GymLeageEndpoint extends CrudEndpoint<GymLeague> {
	public constructor(client: Client) {
		super(client, "gymLeage");
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
