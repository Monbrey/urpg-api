import type { Client } from "../client/Client";
import { User } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class UserEndpoint extends CrudEndpoint<User> {
    constructor(client: Client);
}
