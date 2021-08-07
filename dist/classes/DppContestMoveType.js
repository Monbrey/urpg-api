"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DppContestMoveTypeEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class DppContestMoveTypeEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "dppContestMoveType");
    }
}
exports.DppContestMoveTypeEndpoint = DppContestMoveTypeEndpoint;
