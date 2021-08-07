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
exports.SpeciesEndpoint = void 0;
const CrudEndpoint_1 = require("../rest/CrudEndpoint");
const RequestHandler_1 = require("../rest/RequestHandler");
class SpeciesEndpoint extends CrudEndpoint_1.CrudEndpoint {
    constructor(client) {
        super(client, "pokemon");
    }
    // public async create(): Promise<Species> {
    // 	throw new Error("Method not implemented.");
    // }
    // public async update(): Promise<Species> {
    // 	throw new Error("Method not implemented.");
    // }
    // public async delete(): Promise<Species> {
    // 	throw new Error("Method not implemented.");
    // }
    fetchRank(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield RequestHandler_1.RequestHandler.handle(`${this.url}/rank/${name}`);
            return data;
        });
    }
}
exports.SpeciesEndpoint = SpeciesEndpoint;
