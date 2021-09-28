module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:cypress/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        indent: [
            'error',
            4,
        ],
        'no-plusplus': [
            2,
            { allowForLoopAfterthoughts: true },
        ],
        'linebreak-style': 0,
    },
};
