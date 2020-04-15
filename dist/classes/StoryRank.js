"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class StoryRankEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "storyRank");
    }
}
exports.StoryRankEndpoint = StoryRankEndpoint;
