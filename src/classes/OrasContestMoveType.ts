import type { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";

export class OrasContestMoveTypeEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "orasContestMoveType");
    }
}