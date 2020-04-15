import type { Client } from "../client/Client";
import { Role } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
import { RequestHandler } from "../rest/RequestHandler";

export class RoleEndpoint extends CrudEndpoint<Role> {
    public constructor(client: Client) {
        super(client, "role");
    }

    public async fetch(name: string): Promise<Role> {
        return RequestHandler.handle<Role>(`${this.url}/${name}`);
    }

    public async create(): Promise<Role> {
        throw new Error("Method not implemented.");
    }

    public async update(): Promise<Role> {
        throw new Error("Method not implemented.");
    }

    public async delete(): Promise<Role> {
        throw new Error("Method not implemented.");
    }
}