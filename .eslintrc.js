module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `./tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: { 'import/prefer-default-export': 'off' },
}
