import { type PrettierConfig } from '@ianvs/prettier-plugin-sort-imports'
import * as sortImports from '@ianvs/prettier-plugin-sort-imports'
import * as astro from 'prettier-plugin-astro'
import * as curly from 'prettier-plugin-curly'
import * as packageJson from 'prettier-plugin-packagejson'
import * as tailwindcss from 'prettier-plugin-tailwindcss'

export const baseConfig = {
  arrowParens: 'always',
  importOrder: ['<BUILTIN_MODULES>', '', '<THIRD_PARTY_MODULES>', '', '^[.]/'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  jsxSingleQuote: false,
  plugins: [sortImports, astro, curly, packageJson, tailwindcss],
  printWidth: 80,
  proseWrap: 'always',
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['tsconfig.json'],
      options: {
        parser: 'jsonc',
        trailingComma: 'none',
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
} satisfies PrettierConfig

export default baseConfig
