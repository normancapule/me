module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2018',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'markdown'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '_' },
    ],
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['*js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['*.test.*'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
