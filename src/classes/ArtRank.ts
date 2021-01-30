import type { Client } from "../client/Client";
import { CreativeRank } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class ArtRankEndpoint extends CrudEndpoint<CreativeRank> {
    public constructor(client: Client) {
        super(client, "artRank");
    }

    public async create(): Promise<CreativeRank> {
        throw new Error("Method not implemented.");
    }

    public async update(): Promise<CreativeRank> {
        throw new Error("Method not implemented.");
    }

    public async delete(): Promise<CreativeRank> {
        throw new Error("Method not implemented.");
    }
}