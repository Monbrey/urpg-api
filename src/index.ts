import { ReadEndpoint } from "./classes/ReadEndpoint";
import { ReadWriteEndpoint } from "./classes/ReadWriteEndpoint";
import { IAbility, IAttack, IPokemon } from "./models/models";

export type UrpgApiEnvrionment = "staging" | undefined;

export interface UrpgApiOptions {
    token?: string,
    environment?: UrpgApiEnvrionment
}

export class UrpgClient {
    private token?: string;
    private env?: string;
    public baseUrl: string;

    public constructor(options: UrpgApiOptions) {
        this.token = options.token;
        this.env = options.environment;

        this.baseUrl = this.env ? `https://${this.env}.pokemonurpg.com:8443` : `https://pokemonurpg:8443`;
    }

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
}

module.exports.UrpgClient = UrpgClient;

export * from "./models/models";
