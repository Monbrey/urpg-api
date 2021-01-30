"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatureEndpoint = void 0;
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class NatureEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "nature");
    }
}
exports.NatureEndpoint = NatureEndpoint;
