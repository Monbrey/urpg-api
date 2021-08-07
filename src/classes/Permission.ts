import type { Client } from "../client/Client";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class PermissionEndpoint extends CrudEndpoint {
	public constructor(client: Client) {
		super(client, "permission");
	}

	// public async create(): Promise<unknown> {
	// 	throw new Error("Method not implemented.");
	// }


	// public async update(): Promise<unknown> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async delete(): Promise<unknown> {
	// 	throw new Error("Method not implemented.");
	// }
}
