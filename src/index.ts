import { PrettierConfig } from "@ianvs/prettier-plugin-sort-imports";

export default {
  arrowParens: "always",
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[~/]",
    "^[.]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  jsxSingleQuote: false,
  plugins: [
    require("@ianvs/prettier-plugin-sort-imports"),
    require("prettier-plugin-astro"),
    require("prettier-plugin-curly"),
    require("prettier-plugin-packagejson"),
    require("prettier-plugin-tailwindcss"),
  ],
  printWidth: 80,
  proseWrap: "always",
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
} satisfies PrettierConfig;
