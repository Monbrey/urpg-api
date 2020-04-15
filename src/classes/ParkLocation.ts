import type { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";

export class ParkLocationEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "parkLocation");
    }
}