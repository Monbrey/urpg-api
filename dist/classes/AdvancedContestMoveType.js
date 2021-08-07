"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedContestMoveType = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class AdvancedContestMoveType extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "advContestMoveType");
    }
}
exports.AdvancedContestMoveType = AdvancedContestMoveType;
