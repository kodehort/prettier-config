import { type PrettierConfig } from "@ianvs/prettier-plugin-sort-imports";
import astro from "prettier-plugin-astro";
import packageJson from "prettier-plugin-packagejson";
import sortImports from "@ianvs/prettier-plugin-sort-imports";
import curly from "prettier-plugin-curly";
import tailwindcss from "prettier-plugin-tailwindcss";

export const baseConfig = {
  arrowParens: "always",
  importOrder: ["<BUILTIN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[.]/"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  jsxSingleQuote: false,
  plugins: [sortImports, astro, curly, packageJson, tailwindcss],
  printWidth: 80,
  proseWrap: "always",
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  overrides: [
    {
      files: ["tsconfig.json"],
      options: {
        parser: "jsonc",
        trailingComma: "none",
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
} satisfies PrettierConfig;
