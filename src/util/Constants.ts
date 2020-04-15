const EnvironmentNames = ['production', 'staging'] as const;
export type EnvironmentName = typeof EnvironmentNames[number];

export const Environments: Record<EnvironmentName, string> = {
    production: "https://pokemonurpg.com:8443",
    staging: "https://staging.pokemonurpg.com:8443"
} as const;