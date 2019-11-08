"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadEndpoint_1 = require("./classes/ReadEndpoint");
var ReadWriteEndpoint_1 = require("./classes/ReadWriteEndpoint");
var UrpgClient = /** @class */ (function () {
    function UrpgClient(options) {
        this.ability = new ReadWriteEndpoint_1.ReadWriteEndpoint("ability", this);
        this.artRank = new ReadEndpoint_1.ReadEndpoint("artrank", this);
        this.attackCategory = new ReadEndpoint_1.ReadEndpoint("attackcateory", this);
        this.attack = new ReadWriteEndpoint_1.ReadWriteEndpoint("attack", this);
        this.attackTargetType = new ReadEndpoint_1.ReadEndpoint("attacktargettype", this);
        this.dppContestMoveType = new ReadEndpoint_1.ReadEndpoint("dppContestMoveType", this);
        this.orasContestMoveType = new ReadEndpoint_1.ReadEndpoint("orasContestMoveType", this);
        this.parkLocation = new ReadEndpoint_1.ReadEndpoint("parkLocation", this);
        this.parkRank = new ReadEndpoint_1.ReadEndpoint("parkrank", this);
        this.rseContestMoveType = new ReadEndpoint_1.ReadEndpoint("rseContestMoveType", this);
        this.pokemon = new ReadWriteEndpoint_1.ReadWriteEndpoint("pokemon", this);
        this.storyRank = new ReadEndpoint_1.ReadEndpoint("storyrank", this);
        this.type = new ReadEndpoint_1.ReadEndpoint("type", this);
        this.token = options.token;
        this.env = options.environment;
        this.baseUrl = this.env ? "https://" + this.env + ".pokemonurpg.com:8443" : "https://pokemonurpg:8443";
    }
    return UrpgClient;
}());
exports.UrpgClient = UrpgClient;
module.exports.UrpgClient = UrpgClient;
//# sourceMappingURL=index.js.map