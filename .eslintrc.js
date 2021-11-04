module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'], 
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'require-await': 'off',
    'keyword-spacing': 2,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'eol-last': ["error", "always"]
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/indent': 'off',
      },
    },
  ],
}
