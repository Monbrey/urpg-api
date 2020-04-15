import type { Client } from "../client/Client";
import { User } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class UserEndpoint extends CrudEndpoint<User> {
    constructor(client: Client);
    create(): Promise<User>;
    update(): Promise<User>;
    delete(): Promise<User>;
    invite(): Promise<unknown>;
    login(): Promise<unknown>;
    session(): Promise<unknown>;
}
