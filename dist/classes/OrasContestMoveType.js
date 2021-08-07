"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrasContestMoveTypeEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class OrasContestMoveTypeEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "orasContestMoveType");
    }
}
exports.OrasContestMoveTypeEndpoint = OrasContestMoveTypeEndpoint;
