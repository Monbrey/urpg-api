"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RseContestMoveTypeEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class RseContestMoveTypeEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "rseContestMoveType");
    }
}
exports.RseContestMoveTypeEndpoint = RseContestMoveTypeEndpoint;
