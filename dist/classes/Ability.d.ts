import type { Client } from "../client/Client";
import { Ability } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class AbilityEndpoint extends CrudEndpoint<Ability> {
    constructor(client: Client);
    create(): Promise<Ability>;
    update(): Promise<Ability>;
    delete(): Promise<Ability>;
}
