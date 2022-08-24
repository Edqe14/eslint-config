module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    semi: 'off',
    quotes: 'off',
    indent: 'off',
    'no-multi-spaces': 'error',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'no-trailing-spaces': 'error',
    'import/no-unresolved': 'off',
    'object-curly-spacing': 'error',
    'class-methods-use-this': 'off',
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};