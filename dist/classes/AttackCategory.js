"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackCategoryEndpoint = void 0;
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class AttackCategoryEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "attackcategory");
    }
}
exports.AttackCategoryEndpoint = AttackCategoryEndpoint;
