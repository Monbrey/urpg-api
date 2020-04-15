"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class ParkLocationEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "parkLocation");
    }
}
exports.ParkLocationEndpoint = ParkLocationEndpoint;
