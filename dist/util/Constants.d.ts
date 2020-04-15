declare const EnvironmentNames: readonly ["production", "staging"];
export declare type EnvironmentName = typeof EnvironmentNames[number];
export declare const Environments: Record<EnvironmentName, string>;
export {};
