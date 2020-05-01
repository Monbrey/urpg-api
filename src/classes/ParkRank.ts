import { BaseEndpoint } from "../rest/BaseEndpoint";
import type { Client } from "../client/Client";

export class ParkRankEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "parkrank");
    }
}