import type { Client } from "../client/Client";
import { Ability } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
import { RequestHandler } from "../rest/RequestHandler";

export class AbilityEndpoint extends CrudEndpoint<Ability> {
    public constructor(client: Client) {
        super(client, "ability");
    }

    public async fetch(name: string): Promise<Ability> {
        return RequestHandler.handle<Ability>(`${this.url}/${name}`);
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