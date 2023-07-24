/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  arrowParens: 'always',
  importOrder: ['<THIRD_PARTY_MODULES>', '<BUILTIN_MODULES>', '', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  jsxSingleQuote: false,
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-curly'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  printWidth: 80,
  proseWrap: 'always',
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
}
