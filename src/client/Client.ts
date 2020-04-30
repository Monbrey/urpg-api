import { AbilityEndpoint } from "../classes/Ability";
import { ArtRankEndpoint } from "../classes/ArtRank";
import { AttackEndpoint } from "../classes/Attack";
import { AttackCategoryEndpoint } from "../classes/AttackCategory";
import { AttackTargetTypeEndpoint } from "../classes/AttackTargetType";
import { DppContestMoveTypeEndpoint } from "../classes/DppContestMoveType";
import { ItemEndpoint } from "../classes/Item";
import { OrasContestMoveTypeEndpoint } from "../classes/OrasContestMoveType";
import { ParkLocationEndpoint } from "../classes/ParkLocation";
import { ParkRankEndpoint } from "../classes/ParkRank";
import { PermissionEndpoint } from "../classes/Permission";
import { RoleEndpoint } from "../classes/Role";
import { RseContestMoveTypeEndpoint } from "../classes/RseContestMoveType";
import { SpeciesEndpoint } from "../classes/Species";
import { StoryRankEndpoint } from "../classes/StoryRank";
import { TypeEndpoint } from "../classes/Type";
import { UserEndpoint } from "../classes/User";
import { DefaultOptions, EnvironmentName, Environments } from "../util/Constants";

export interface ClientOptions {
    environment?: EnvironmentName;
    nullHandling?: boolean;
}

export class Client {
    public readonly baseUrl: string;
    public readonly nullHandling: boolean;

    public readonly ability: AbilityEndpoint;
    public readonly artRank: ArtRankEndpoint;
    public readonly attack: AttackEndpoint;
    public readonly attackCategory: AttackCategoryEndpoint;
    public readonly attackTargetType: AttackTargetTypeEndpoint;
    public readonly dppContestMoveType: DppContestMoveTypeEndpoint;
    public readonly item: ItemEndpoint;
    public readonly orasContestMoveType: OrasContestMoveTypeEndpoint;
    public readonly parkLocation: ParkLocationEndpoint;
    public readonly parkRank: ParkRankEndpoint;
    public readonly permission: PermissionEndpoint;
    public readonly role: RoleEndpoint;
    public readonly rseContestMoveType: RseContestMoveTypeEndpoint;
    public readonly species: SpeciesEndpoint;
    public readonly storyRank: StoryRankEndpoint;
    public readonly type: TypeEndpoint;
    public readonly user: UserEndpoint;

    public constructor(options: ClientOptions = DefaultOptions) {
        this.baseUrl = Environments[options.environment];
        this.nullHandling = options.nullHandling;

        this.ability = new AbilityEndpoint(this);
        this.artRank = new ArtRankEndpoint(this);
        this.attack = new AttackEndpoint(this);
        this.attackCategory = new AttackCategoryEndpoint(this);
        this.attackTargetType = new AttackTargetTypeEndpoint(this);
        this.dppContestMoveType = new DppContestMoveTypeEndpoint(this);
        this.item = new ItemEndpoint(this);
        this.orasContestMoveType = new OrasContestMoveTypeEndpoint(this);
        this.parkLocation = new ParkLocationEndpoint(this);
        this.parkRank = new ParkRankEndpoint(this);
        this.permission = new PermissionEndpoint(this);
        this.role = new RoleEndpoint(this);
        this.rseContestMoveType = new RseContestMoveTypeEndpoint(this);
        this.species = new SpeciesEndpoint(this);
        this.storyRank = new StoryRankEndpoint(this);
        this.type = new TypeEndpoint(this);
        this.user = new UserEndpoint(this);
    }
}

module.exports.Client = Client;

export * from "../models";

