"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class ItemEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "item");
    }
}
exports.ItemEndpoint = ItemEndpoint;
