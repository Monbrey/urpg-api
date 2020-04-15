import type { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";
export declare class PermissionEndpoint extends BaseEndpoint {
    constructor(client: Client);
    create(): Promise<unknown>;
}
