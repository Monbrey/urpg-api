import { ReadEndpoint } from "./classes/ReadEndpoint";
import { ReadWriteEndpoint } from "./classes/ReadWriteEndpoint";
import { Ability, Attack, Pokemon } from "./models/models";
export declare type UrpgApiEnvrionment = "staging" | undefined;
export interface UrpgApiOptions {
    token?: string;
    environment?: UrpgApiEnvrionment;
}
export declare class UrpgClient {
    private token?;
    private env?;
    baseUrl: string;
    constructor(options: UrpgApiOptions);
    ability: ReadWriteEndpoint<Ability>;
    artRank: ReadEndpoint;
    attackCategory: ReadEndpoint;
    attack: ReadWriteEndpoint<Attack>;
    attackTargetType: ReadEndpoint;
    dppContestMoveType: ReadEndpoint;
    orasContestMoveType: ReadEndpoint;
    parkLocation: ReadEndpoint;
    parkRank: ReadEndpoint;
    rseContestMoveType: ReadEndpoint;
    pokemon: ReadWriteEndpoint<Pokemon>;
    storyRank: ReadEndpoint;
    type: ReadEndpoint;
}
export * from "./models/models";
