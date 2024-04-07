import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports'

import imports from '@ianvs/prettier-plugin-sort-imports'
import astro from 'prettier-plugin-astro'
import curly from 'prettier-plugin-curly'
import packagejson from 'prettier-plugin-packagejson'
import tailwindcss from 'prettier-plugin-tailwindcss'

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
  plugins:[
    imports,
    astro,
    curly,
    packagejson,
    tailwindcss,
  ],
  printWidth: 80,
  proseWrap: 'always',
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
} satisfies PrettierConfig
