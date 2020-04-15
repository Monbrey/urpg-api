module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "tsConfigRootDir": __dirname,
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
        "@typescript-eslint/interface-name-prefix": ["error"]
    }
};
