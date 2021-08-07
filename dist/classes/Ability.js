"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class AbilityEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "ability");
    }
}
exports.AbilityEndpoint = AbilityEndpoint;
