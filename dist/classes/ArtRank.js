"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtRankEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class ArtRankEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "artRank");
    }
}
exports.ArtRankEndpoint = ArtRankEndpoint;
