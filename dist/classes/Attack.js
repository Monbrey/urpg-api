"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class AttackEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "attack");
    }
}
exports.AttackEndpoint = AttackEndpoint;
