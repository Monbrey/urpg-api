import { BaseEndpoint } from "./BaseEndpoint";
import { Matched } from "../models";
export declare abstract class CrudEndpoint<T = unknown> extends BaseEndpoint {
    fetch(name: string): Promise<T>;
    fetchClosest(name: string): Promise<Matched<T>>;
}
