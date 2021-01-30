import type { Client } from "../client/Client";
import { ContestMoveType } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class DppContestMoveTypeEndpoint extends CrudEndpoint<ContestMoveType> {
    public constructor(client: Client) {
        super(client, "dppContestMoveType");
    }

    public async create(): Promise<ContestMoveType> {
        throw new Error("Method not implemented.");
    }

    public async update(): Promise<ContestMoveType> {
        throw new Error("Method not implemented.");
    }

    public async delete(): Promise<ContestMoveType> {
        throw new Error("Method not implemented.");
    }
}