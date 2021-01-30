"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkLocationEndpoint = void 0;
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class ParkLocationEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "parklocation");
    }
}
exports.ParkLocationEndpoint = ParkLocationEndpoint;
