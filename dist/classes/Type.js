"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeEndpoint = void 0;
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class TypeEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "type");
    }
}
exports.TypeEndpoint = TypeEndpoint;
