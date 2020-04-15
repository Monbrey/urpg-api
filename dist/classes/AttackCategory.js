"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class AttackCategoryEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "attackCategory");
    }
}
exports.AttackCategoryEndpoint = AttackCategoryEndpoint;
