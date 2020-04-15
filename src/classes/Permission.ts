import type { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";

export class PermissionEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "permission");
    }

    public async create(): Promise<unknown> {
        throw new Error("Method not implemented.");
    }
}