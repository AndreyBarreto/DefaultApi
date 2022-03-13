module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'import/no-unresolved': 'off',
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'no-promise-executor-return': 'off',
        'consistent-return': 'off',
        indent: ['error', 4],
        camelcase: 'off',
        'max-len': 'off',
    },

};
