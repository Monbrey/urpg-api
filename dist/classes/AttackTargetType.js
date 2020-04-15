"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class AttackTargetTypeEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "attackTargetType");
    }
}
exports.AttackTargetTypeEndpoint = AttackTargetTypeEndpoint;
