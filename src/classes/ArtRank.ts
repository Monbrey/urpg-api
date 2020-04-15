import type { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";

export class ArtRankEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "artRank");
    }
}