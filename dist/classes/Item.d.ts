import type { Client } from "../client/Client";
import { Item } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class ItemEndpoint extends CrudEndpoint<Item> {
    constructor(client: Client);
    fetch(name: string): Promise<Item>;
    create(): Promise<Item>;
    update(): Promise<Item>;
    delete(): Promise<Item>;
}
