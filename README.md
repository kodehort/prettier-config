# prettier-config

[![npm version](https://badge.fury.io/js/@kodehort%2Fprettier-config.svg)](https://badge.fury.io/js/@kodehort%2Fprettier-config)

`prettier-config` is a curated prettier configuration that can be
across our projects and can be used in your projects. Rather than
add this all to a template, it is included as a package
enabling updates to be pulled forward into consuming projects.

## Installation

1. You'll first need to install [Prettier](https://prettier.io/):

```sh
npm install prettier --save-dev
```

2. Next, install `prettier-config`, run the following command:

```sh
npm install --save-dev @kodehort/prettier-config
```

Or:

```sh
pnpm add @kodehort/prettier-config -D
```

## Usage

To use `prettier-config`, you need to extend it in your prettier
configuration file. Here's an example `prettier.config.js` file

```javascript prettier.config.js
import prettierConfig from '@kodehort/prettier-config'

/** @type {import("prettier").Config} */
export default {
  ...prettierConfig,
  semi: false,
}
```
