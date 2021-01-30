"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestAttributeEndpoint = void 0;
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class ContestAttributeEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "contestAttribute");
    }
}
exports.ContestAttributeEndpoint = ContestAttributeEndpoint;
