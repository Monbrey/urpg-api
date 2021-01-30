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
exports.BaseEndpoint = void 0;
const RequestHandler_1 = require("./RequestHandler");
class BaseEndpoint {
    /**
     * Constructor which instantiates an Endpoint
     * @param {Client} client The Client which instatiated and manages this endpoint
     * @param {string} resource Name of the resource, forming the URL parameter for this endpoint
     */
    constructor(client, resource) {
        this.client = client;
        this.url = `${this.client.baseUrl}/${resource}`;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return RequestHandler_1.RequestHandler.handle(this.url, "GET");
        });
    }
}
exports.BaseEndpoint = BaseEndpoint;
