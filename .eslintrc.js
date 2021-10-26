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
  // add your custom rules here
  rules: {
    // prettier一般ルール
    'prettier/prettier': 'error',
    // vscodeのlinterとの競合解決
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    // 開発時には許容される
    // FIXME この2つはバンドル時に取り除く
    'no-console': 'off',
    'no-debugger': 'off',
    // 変数が使用されているかのチェックについては、通常はtsのルールを優先する
    // 型変数も含めて使用しているかチェック可能
    'no-unused-vars': 'off',
    // 再帰的な定義だと達成不可能な上、実行時に全く影響がないため
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // typescriptは、継承先クラスでsuper()呼び出しを強制するので、super呼び出しだけするコンストラクタを許容する
    'no-useless-constructor': 'off',
    // インデントについては、通常はtsのルールを優先する
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    // async関数でawaitを必ずしも要求しない(ただただpromiseにしたい場合があるため)
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
  },
  overrides: [
    // tsファイルにおいてeslintのインデント検知は効かせない
    // genericsに関するインデントをeslintは適切に処理できないので、prettierにまかせる
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/indent': 'off',
      },
    },
  ],
}
