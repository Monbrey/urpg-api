import { Client } from "../client/Client";
import { Matched } from "../models";
import { BaseEndpoint } from "./BaseEndpoint";
export declare abstract class CrudEndpoint<T = unknown> extends BaseEndpoint {
    constructor(client: Client, resource: string);
    fetch(name: string): Promise<T>;
    fetchClosest(name: string): Promise<Matched<T>>;
    abstract create(): Promise<T>;
    abstract update(): Promise<T>;
    abstract delete(): Promise<T>;
}
