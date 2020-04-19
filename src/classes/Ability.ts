import type { Client } from "../client/Client";
import { Ability } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class AbilityEndpoint extends CrudEndpoint<Ability> {
    public constructor(client: Client) {
        super(client, "ability");
    }

    public async create(): Promise<Ability> {
        throw new Error("Method not implemented.");
    }

    public async update(): Promise<Ability> {
        throw new Error("Method not implemented.");
    }
    
    public async delete(): Promise<Ability> {
        throw new Error("Method not implemented.");
    }
}