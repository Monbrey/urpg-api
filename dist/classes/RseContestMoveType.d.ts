import type { Client } from "../client/Client";
import { ContestMoveType } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class RseContestMoveTypeEndpoint extends CrudEndpoint<ContestMoveType> {
    constructor(client: Client);
}
