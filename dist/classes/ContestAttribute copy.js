"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class ContestAttributeEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "contestAttribute");
    }
}
exports.ContestAttributeEndpoint = ContestAttributeEndpoint;
