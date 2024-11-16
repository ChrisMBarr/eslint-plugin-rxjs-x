# Changelog

[npm history](https://www.npmjs.com/package/eslint-plugin-rxjs-x?activeTab=versions)

## v0.3.1 (2024-11-16)

### Bug Fixes

- **no-ignored-error**: fix observer objects not getting checked for `error` property ([#27](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/27)) ([46e105f](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/46e105fde371a2013713f5e141b2c67ab039bd07))

## v0.3.0 (2024-11-15)

### Breaking Changes

- **ban-operators**: improve type checking of banned operators, report error at usage instead of in import statement ([#25](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/25)) ([994ff25](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/994ff25391cc4efbb2f2cfa99c323c7280e9d1b5))
- **throw-error**: stop linting regular `throw` statements ([#22](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/22)) ([02fdffd](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/02fdffde6b9376621b902d2ebbae4fb8080d29f1))

### Features

- **no-ignored-default-value**: new rule for enforcing `defaultValue` ([#15](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/15)) ([9bd896e](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/9bd896e0acb87cce2931ecda8b683fb5e9a8837c))

## v0.2.4 (2024-11-09)

### Features

- **macro**: deprecated ([#13](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/13)) ([39be258](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/39be258ad359bd1e79f057302d7ffe12954f9c14))

## v0.2.3 (2024-11-08)

### Bug Fixes

- **no-ignored-replay-buffer**: check config bufferSize ([#12](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/12)) ([ef2f886](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/ef2f8866684ed6f918eb8c465e90a1de8982186a))

### Chores

- change `rxjs` to an optional peer dependency ([90b03e6](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/90b03e6a01e0357603eb6426638ca43e0f392dca))

## v0.2.2 (2024-11-07)

### Breaking Changes

- TypeScript >=4.7.4 is required

### Bug Fixes

- fix broken imports in ESM configs using TypeScript versions lower than 5.5 ([#11](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/11)) ([1693df0](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/1693df0423acb1eb7cef237620ed31d2ee5520fa))

## v0.2.1 (2024-11-07)

### Chores

- decrease minimum `typescript-eslint` version to ^8.1.0 ([#10](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/10)) ([e7d0d70](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/e7d0d7078b50d1ef72c48318159a80ce481ef73c))

## v0.2.0 (2024-11-05)

### Breaking Changes

- improve CommonJS typing to avoid needing `.default` ([#4](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/4)) ([0b47390](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/0b473900c141403a1eb45e5a44fd2f2b43ebb6d5))

### Documentation

- add options documentation to rule docs ([#6](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/6)) ([ee705d2](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/ee705d23efe7c779bfabb855e82130c664ba35c4))

## v0.1.0 (2024-11-04)

### Breaking Changes

- TypeScript >=4.2.0 is required
- `tslib` ^2.1.0 is required

### Chores

- drop dependencies `tsutils` and `tsutils-etc`, add dependency `ts-api-utils` ([#3](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/3)) ([c64f9f6](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/c64f9f6bd810f7d114c9dac9f6ab72df1b2d2e31))

## v0.0.2 (2024-11-01)

### Bug Fixes

- fix wrong types for CommonJS ([#2](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/pull/2)) ([2d330aa](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/commit/2d330aa943f31bbb7831607c0573b9c8e41d8268))

## v0.0.1 (2024-11-01)

Initial prerelease version.

### Breaking Changes

- `eslint` ^8.57.0 || 9.0.0 is required
- `typescript-eslint` ^8 is required
- Node.js ^18.18.0 || ^20.9.0 || >= 21.1.0 is required

### Bug Fixes

- **no-implicit-any-catch**: fix `typeAnnotation` bug breaking linting.

### Chores

- drop dependency `eslint-etc`
- drop dependency `requireindex`
- add `rxjs` >=7 as peer dependency
- add `requiresTypeChecking` to `meta.docs` of relevant rules
- switch from mocha to vitest
