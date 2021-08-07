"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class PermissionEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "permission");
    }
}
exports.PermissionEndpoint = PermissionEndpoint;
