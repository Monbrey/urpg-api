import type { Client } from "../client/Client";
import { Species } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class SpeciesEndpoint extends CrudEndpoint<Species> {
    constructor(client: Client);
    create(): Promise<Species>;
    update(): Promise<Species>;
    delete(): Promise<Species>;
    fetchRank(name: string): Promise<string[]>;
}
