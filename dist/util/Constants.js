"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultOptions = exports.Environments = void 0;
const EnvironmentNames = ["production", "staging"];
exports.Environments = {
    production: "https://pokemonurpg.com:8443",
    staging: "http://staging.pokemonurpg.com:8080",
};
exports.DefaultOptions = { environment: "production", nullHandling: false };
