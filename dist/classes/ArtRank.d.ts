import type { Client } from "../client/Client";
import { CreativeRank } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class ArtRankEndpoint extends CrudEndpoint<CreativeRank> {
    constructor(client: Client);
    create(): Promise<CreativeRank>;
    update(): Promise<CreativeRank>;
    delete(): Promise<CreativeRank>;
}
