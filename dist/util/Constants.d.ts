declare const EnvironmentNames: string[];
export declare type EnvironmentName = typeof EnvironmentNames[number];
export declare const Environments: {
    production: string;
    staging: string;
};
export declare const DefaultOptions: {
    environment: string;
    nullHandling: boolean;
};
export {};
