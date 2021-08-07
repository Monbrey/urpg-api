"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryRankEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
class StoryRankEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "storyRank");
    }
}
exports.StoryRankEndpoint = StoryRankEndpoint;
