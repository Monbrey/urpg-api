"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ability_1 = require("../classes/Ability");
const ArtRank_1 = require("../classes/ArtRank");
const Attack_1 = require("../classes/Attack");
const AttackCategory_1 = require("../classes/AttackCategory");
const AttackTargetType_1 = require("../classes/AttackTargetType");
const DppContestMoveType_1 = require("../classes/DppContestMoveType");
const Item_1 = require("../classes/Item");
const OrasContestMoveType_1 = require("../classes/OrasContestMoveType");
const ParkLocation_1 = require("../classes/ParkLocation");
const ParkRank_1 = require("../classes/ParkRank");
const Permission_1 = require("../classes/Permission");
const Role_1 = require("../classes/Role");
const RseContestMoveType_1 = require("../classes/RseContestMoveType");
const Species_1 = require("../classes/Species");
const StoryRank_1 = require("../classes/StoryRank");
const Type_1 = require("../classes/Type");
const User_1 = require("../classes/User");
const Constants_1 = require("../util/Constants");
class Client {
    constructor(environment = "production", nullHandling = false) {
        this.baseUrl = Constants_1.Environments[environment];
        this.nullHandling = nullHandling;
        this.ability = new Ability_1.AbilityEndpoint(this);
        this.artRank = new ArtRank_1.ArtRankEndpoint(this);
        this.attack = new Attack_1.AttackEndpoint(this);
        this.attackCategory = new AttackCategory_1.AttackCategoryEndpoint(this);
        this.attackTargetType = new AttackTargetType_1.AttackTargetTypeEndpoint(this);
        this.dppContestMoveType = new DppContestMoveType_1.DppContestMoveTypeEndpoint(this);
        this.item = new Item_1.ItemEndpoint(this);
        this.orasContestMoveType = new OrasContestMoveType_1.OrasContestMoveTypeEndpoint(this);
        this.parkLocation = new ParkLocation_1.ParkLocationEndpoint(this);
        this.parkRank = new ParkRank_1.ParkRankEndpoint(this);
        this.permission = new Permission_1.PermissionEndpoint(this);
        this.role = new Role_1.RoleEndpoint(this);
        this.rseContestMoveType = new RseContestMoveType_1.RseContestMoveTypeEndpoint(this);
        this.species = new Species_1.SpeciesEndpoint(this);
        this.storyRank = new StoryRank_1.StoryRankEndpoint(this);
        this.type = new Type_1.TypeEndpoint(this);
        this.user = new User_1.UserEndpoint(this);
    }
}
exports.Client = Client;
module.exports.Client = Client;
