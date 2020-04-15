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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const utils_1 = require("ts-jest/utils");
const Client_1 = require("../client/Client");
jest.mock("cross-fetch");
const fetchMock = utils_1.mocked(cross_fetch_1.default, true);
const { Response } = jest.requireActual("cross-fetch");
const client = new Client_1.Client();
const list = ["Blaze", "Overgrow", "Torrent"];
const ability = {
    dbid: 1542,
    name: 'Blaze',
    description: 'Powers up Fire-type moves when the Pokemon has low HP.'
};
const responseMock = { status: 200, data: undefined };
test('should fetch list of abilities', () => __awaiter(void 0, void 0, void 0, function* () {
    responseMock.data = list;
    fetchMock.mockReturnValue(Promise.resolve(new Response(JSON.stringify(responseMock))));
    const response = yield client.ability.list();
    expect(response).toEqual(list);
}));
test('should fetch single ability', () => __awaiter(void 0, void 0, void 0, function* () {
    responseMock.data = ability;
    fetchMock.mockReturnValue(Promise.resolve(new Response(JSON.stringify(responseMock))));
    const response = yield client.ability.fetch("Blaze");
    expect(response).toEqual(ability);
}));
