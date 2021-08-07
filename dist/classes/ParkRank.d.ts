import type { Client } from "../client/Client";
import { CreativeRank } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class ParkRankEndpoint extends CrudEndpoint<CreativeRank> {
    constructor(client: Client);
}
