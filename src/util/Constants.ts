
const EnvironmentNames = ['production', 'staging'];
export type EnvironmentName = typeof EnvironmentNames[number];

export const Environments = {
    production: "https://pokemonurpg.com:8443",
    staging: "https://staging.pokemonurpg.com:8443"
};

export const DefaultOptions = { environment: "production", nullHandling: false }