import { PrettierConfig } from "@ianvs/prettier-plugin-sort-imports";

export const baseConfig = {
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
    import("@ianvs/prettier-plugin-sort-imports"),
    import("prettier-plugin-astro"),
    import("prettier-plugin-curly"),
    require("prettier-plugin-packagejson"),
    import("prettier-plugin-tailwindcss"),
  ],
  printWidth: 80,
  proseWrap: "always",
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
} satisfies PrettierConfig;
