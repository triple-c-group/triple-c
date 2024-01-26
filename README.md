# Triple C

This is the official repository of Triple C.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Remix](https://remix.run/) app
- `api`: a [Spring](https://spring.io/) app
- `recommendation-engine`: a [Flask](https://flask.palletsprojects.com/en/3.0.x/) app
- `@triple-c/eslint-config`: `eslint` configurations
- `@triple-c/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```
