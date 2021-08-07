import type { Client } from "../client/Client";
import { Gym } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class GymEndpoint extends CrudEndpoint<Gym> {
	public constructor(client: Client) {
		super(client, "gym");
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
