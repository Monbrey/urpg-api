import { ReadEndpoint } from "./classes/ReadEndpoint";
import { ReadWriteEndpoint } from "./classes/ReadWriteEndpoint";
import { IAbility, IAttack, IPokemon } from "./models/models";
export declare type UrpgApiEnvrionment = "staging" | undefined;
export interface UrpgApiOptions {
    environment?: UrpgApiEnvrionment;
}
/**
 * The main hub for interacting with the URPG API
 */
export declare class UrpgClient {
    private environment?;
    baseUrl: string;
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
    /**
     * @param {Object} [options] Options
     * @param {string} [options.environment] The non-prod API environment to connect to
     * @param {number} [options.cacheTime=60000] The time, in ms, to cache data for
     */
    constructor(options?: UrpgApiOptions);
}
export * from "./models/models";
