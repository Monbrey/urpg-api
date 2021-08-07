import type { Client } from "../client/Client";
import { Section } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class SectionEndpoint extends CrudEndpoint<Section> {
	public constructor(client: Client) {
		super(client, "section");
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
