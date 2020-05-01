import { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";

export class AttackTargetTypeEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "attacktargettype");
    }
}