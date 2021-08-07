"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkRankEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class ParkRankEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "parkRank");
    }
}
exports.ParkRankEndpoint = ParkRankEndpoint;
