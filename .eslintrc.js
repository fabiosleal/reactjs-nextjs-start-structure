module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-process-exit': 'off',
    'class-methods-use-this': 'off',
    'space-before-func': 'off',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'import/extensions': ['error' | 'never', { svg: 'always' }],
    'import/resolver': {
      typescript: {},
    },
    curly: ['error', 'all'],
    'no-mixed-operators': 'error',
    'no-tabs': 'error',
    'no-unexpected-multiline': 'error',
  },
};
