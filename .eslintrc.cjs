module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "no-tabs": "error",
        "no-mixed-spaces-and-tabs": "error",
        "eol-last": ["error", "always"],
        "no-unused-vars": "off",
        "no-constant-condition": "off",
    },
    "globals": {
        "describe": "readonly",
        "it": "readonly"
    },
};
