"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudEndpoint = void 0;
const string_similarity_1 = require("string-similarity");
const BaseEndpoint_1 = require("./BaseEndpoint");
const RequestHandler_1 = require("./RequestHandler");
const Util_1 = require("../util/Util");
class CrudEndpoint extends BaseEndpoint_1.BaseEndpoint {
    fetch(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield RequestHandler_1.RequestHandler.handle(`${this.url}/${name}`);
            return Util_1.flattenObjects(this.client.nullHandling ? Util_1.castNulls(value) : value);
        });
    }
    fetchClosest(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.list();
            const { bestMatch: { rating }, bestMatchIndex } = string_similarity_1.findBestMatch(name.toLowerCase(), list.map(x => x.toLowerCase()));
            const value = yield this.fetch(list[bestMatchIndex]);
            return { rating, value: Util_1.flattenObjects(this.client.nullHandling ? Util_1.castNulls(value) : value) };
        });
    }
}
exports.CrudEndpoint = CrudEndpoint;
