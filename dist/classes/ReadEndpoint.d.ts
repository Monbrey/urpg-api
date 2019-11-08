import { UrpgClient } from "..";
declare class ReadEndpoint {
    protected resource: string;
    protected cache: string[];
    client: UrpgClient;
    constructor(resource: string, client: UrpgClient);
    get(): Promise<string[]>;
}
export { ReadEndpoint };
