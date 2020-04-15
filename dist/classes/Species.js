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
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
const RequestHandler_1 = require("../rest/RequestHandler");
class SpeciesEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "attack");
    }
    fetch(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return RequestHandler_1.RequestHandler.handle(`${this.url}/${name}`);
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    fetchRank(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return RequestHandler_1.RequestHandler.handle(`${this.url}/rank/${name}`);
        });
    }
}
exports.SpeciesEndpoint = SpeciesEndpoint;
