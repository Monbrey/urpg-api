import type { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";

export class DppContestMoveTypeEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "dppContestMoveType");
    }
}