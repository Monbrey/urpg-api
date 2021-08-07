"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class UserEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "user");
    }
}
exports.UserEndpoint = UserEndpoint;
