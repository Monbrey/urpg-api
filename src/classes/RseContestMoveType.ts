import { BaseEndpoint } from "../rest/BaseEndpoint";
import type { Client } from "../client/Client";

export class RseContestMoveTypeEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "rseContestMoveType");
    }
}