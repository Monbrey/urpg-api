import { ReadEndpoint } from "./classes/ReadEndpoint";
import { ReadWriteEndpoint } from "./classes/ReadWriteEndpoint";
import { IAbility, IAttack, IPokemon } from "./models/models";

export type UrpgApiEnvrionment = "staging" | undefined;

export interface UrpgApiOptions {
    environment?: UrpgApiEnvrionment;
}

/**
 * The main hub for interacting with the URPG API
 */
export class UrpgClient {
    private environment?: string;

    public baseUrl: string;
    public ability = new ReadWriteEndpoint<IAbility>("ability", this);
    public artRank = new ReadEndpoint("artrank", this);
    public attackCategory = new ReadEndpoint("attackcateory", this);
    public attack = new ReadWriteEndpoint<IAttack>("attack", this);
    public attackTargetType = new ReadEndpoint("attacktargettype", this);
    public dppContestMoveType = new ReadEndpoint("dppContestMoveType", this);
    public orasContestMoveType = new ReadEndpoint("orasContestMoveType", this);
    public parkLocation = new ReadEndpoint("parkLocation", this);
    public parkRank = new ReadEndpoint("parkrank", this);
    public rseContestMoveType = new ReadEndpoint("rseContestMoveType", this);
    public pokemon = new ReadWriteEndpoint<IPokemon>("pokemon", this);
    public storyRank = new ReadEndpoint("storyrank", this);
    public type = new ReadEndpoint("type", this);


    /**
     * @param {Object} [options] Options
     * @param {string} [options.environment] The non-prod API environment to connect to
     * @param {number} [options.cacheTime=60000] The time, in ms, to cache data for
     */
    public constructor(options: UrpgApiOptions = {}) {
        this.environment = options.environment;

        this.baseUrl = this.environment ? `https://${this.environment}.pokemonurpg.com:8443` : "https://pokemonurpg:8443";
    }
}

module.exports.UrpgClient = UrpgClient;

export * from "./models/models";
