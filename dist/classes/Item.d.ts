import type { Client } from "../client/Client";
import { Item } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class ItemEndpoint extends CrudEndpoint<Item> {
    constructor(client: Client);
}
