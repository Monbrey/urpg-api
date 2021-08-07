import type { Client } from "../client/Client";
import { ContestMoveType } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class DppContestMoveTypeEndpoint extends CrudEndpoint<ContestMoveType> {
    constructor(client: Client);
}
