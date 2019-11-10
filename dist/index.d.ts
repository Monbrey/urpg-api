import { ReadEndpoint } from "./classes/ReadEndpoint";
import { ReadWriteEndpoint } from "./classes/ReadWriteEndpoint";
import { IAbility, IAttack, IPokemon } from "./models/models";
export declare type UrpgApiEnvrionment = "staging" | undefined;
export interface UrpgApiOptions {
    token?: string;
    environment?: UrpgApiEnvrionment;
}
export declare class UrpgClient {
    private token?;
    private env?;
    baseUrl: string;
    constructor(options?: UrpgApiOptions);
    ability: ReadWriteEndpoint<IAbility>;
    artRank: ReadEndpoint;
    attackCategory: ReadEndpoint;
    attack: ReadWriteEndpoint<IAttack>;
    attackTargetType: ReadEndpoint;
    dppContestMoveType: ReadEndpoint;
    orasContestMoveType: ReadEndpoint;
    parkLocation: ReadEndpoint;
    parkRank: ReadEndpoint;
    rseContestMoveType: ReadEndpoint;
    pokemon: ReadWriteEndpoint<IPokemon>;
    storyRank: ReadEndpoint;
    type: ReadEndpoint;
}
export * from "./models/models";
