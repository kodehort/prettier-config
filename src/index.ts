import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports'

export default {
  arrowParens: 'always',
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[~/]',
    '^[.]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  jsxSingleQuote: false,
  plugins: await Promise.all(
    [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-astro',
      'prettier-plugin-curly',
      'prettier-plugin-packagejson',
      'prettier-plugin-tailwindcss',
    ].map(async (path) => await import(path)),
  ),
  printWidth: 80,
  proseWrap: 'always',
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
} satisfies PrettierConfig
