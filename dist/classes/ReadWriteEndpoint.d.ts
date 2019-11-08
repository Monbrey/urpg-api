import { ReadEndpoint } from "./ReadEndpoint";
import { UrpgClient } from "..";
declare class ReadWriteEndpoint<T> extends ReadEndpoint {
    constructor(resource: string, client: UrpgClient);
    get(): Promise<string[]>;
    get(name?: string): Promise<T>;
    getClosest(name: string): Promise<T>;
    static post(): void;
    static put(): void;
}
export { ReadWriteEndpoint };
