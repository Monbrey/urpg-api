"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class ContestRankEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "contestRank");
    }
}
exports.ContestRankEndpoint = ContestRankEndpoint;
