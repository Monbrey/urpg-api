import type { Client } from "../client/Client";
import { Role } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class RoleEndpoint extends CrudEndpoint<Role> {
    constructor(client: Client);
}
