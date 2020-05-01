import type { Client } from "../client/Client";
import { BaseEndpoint } from "../rest/BaseEndpoint";

export class AttackCategoryEndpoint extends BaseEndpoint {
    public constructor(client: Client) {
        super(client, "attackcategory");
    }
}