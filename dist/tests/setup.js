"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_to_match_shape_of_1 = require("jest-to-match-shape-of");
expect.extend({
    toMatchOneOf: jest_to_match_shape_of_1.toMatchOneOf,
    toMatchShapeOf: jest_to_match_shape_of_1.toMatchShapeOf,
});
