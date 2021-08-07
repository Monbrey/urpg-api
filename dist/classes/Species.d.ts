import type { Client } from "../client/Client";
import { Species } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class SpeciesEndpoint extends CrudEndpoint<Species> {
    constructor(client: Client);
    fetchRank(name: string): Promise<string[]>;
}
