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
const Client_1 = require("../client/Client");
const client = new Client_1.Client();
const ability = {
    dbid: 1542,
    name: 'Blaze',
    description: 'Powers up Fire-type moves when the Pokemon has low HP.'
};
test('returns what I was expecting', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield client.ability.fetch("Torrent");
    expect(response).toMatchShapeOf(ability);
}));
