import type { Client } from "../client/Client";
import { User } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class UserEndpoint extends CrudEndpoint<User> {
	public constructor(client: Client) {
		super(client, "user");
	}

	// public async create(): Promise<User> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async update(): Promise<User> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async delete(): Promise<User> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async invite(): Promise<unknown> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async login(): Promise<unknown> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async session(): Promise<unknown> {
	// 	throw new Error("Method not implemented.");
	// }
}
