
const EnvironmentNames = ['production', 'staging'];
export type EnvironmentName = typeof EnvironmentNames[number];

export const Environments = {
    production: "https://pokemonurpg.com:8443",
    staging: "http://staging.pokemonurpg.com:8080"
};

export const DefaultOptions = { environment: "production", nullHandling: false }