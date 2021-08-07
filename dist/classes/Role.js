"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class RoleEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "role");
    }
}
exports.RoleEndpoint = RoleEndpoint;
