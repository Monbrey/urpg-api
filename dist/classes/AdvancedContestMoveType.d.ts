import type { Client } from "../client/Client";
import { ContestMoveType } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class AdvancedContestMoveType extends CrudEndpoint<ContestMoveType> {
    constructor(client: Client);
    create(): Promise<ContestMoveType>;
    update(): Promise<ContestMoveType>;
    delete(): Promise<ContestMoveType>;
}
