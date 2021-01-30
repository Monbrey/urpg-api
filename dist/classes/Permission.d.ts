import type { Client } from "../client/Client";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class PermissionEndpoint extends CrudEndpoint {
    constructor(client: Client);
    create(): Promise<unknown>;
    update(): Promise<unknown>;
    delete(): Promise<unknown>;
}
