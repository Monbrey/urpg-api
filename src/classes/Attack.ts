import type { Client } from "../client/Client";
import { Attack } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
import { RequestHandler } from "../rest/RequestHandler";

export class AttackEndpoint extends CrudEndpoint<Attack> {
    public constructor(client: Client) {
        super(client, "attack");
    }

    public async create(): Promise<Attack> {
        throw new Error("Method not implemented.");
    }

    public async update(): Promise<Attack> {
        throw new Error("Method not implemented.");
    }

    public async delete(): Promise<Attack> {
        throw new Error("Method not implemented.");
    }
}