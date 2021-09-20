module.exports =  {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
  ],
  parserOptions:  {
    ecmaVersion: 2018,
    sourceType: 'module',
    // https://www.npmjs.com/package/@typescript-eslint/parser#parseroptionsproject
    project: [
      './tsconfig.json',
      './buildtools/tsconfig.json',
      './test/tsconfig.json',
      ]
  },
  rules:  {
    // analytics_* rules
    "object-curly-newline": ["error", { "minProperties": 10, "consistent": true }], // Changed minProperties from 3 to 10
    "max-len": ["error", 250], // TODO: Change to 120
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": false }], // Changed requireForBlockBody from true to false
    "max-classes-per-file": ["error", 2], // Changed from 1 to 2, TODO: fix in verifier source
    "@typescript-eslint/brace-style": ["error", "stroustrup"], // Changed from 1tbs to stroustrup
    "@typescript-eslint/quotes": ["error", "single", { "allowTemplateLiterals": true }], // Changed allowTemplateLiterals from false to true
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false }], // allow functions to be used before being defined - allows non-exported to be below exported functions

    // analytics_* todo's
    "@typescript-eslint/no-explicit-any": ["off"], // TODO: fix all explicit any's
    "@typescript-eslint/explicit-function-return-type": ["off"], // TODO: fix all missing function return types
  },
};
