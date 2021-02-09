# PMDb

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Personal Movie Database. Web app to create, manage, and share movie lists.

## Development

### Requirements

- [Node.js](https://nodejs.org/en/) >= 14.15.4.
- [Yarn](https://yarnpkg.com/).

### Install

Install dependencies:

```bash
yarn
```

Setup the local environment:

```bash
yarn generate local
```

### Getting started

- `yarn dev`: start development server.
- `yarn commit`: commit changes.
- `yarn test`: run tests.
- `yarn lint`: lint source code.

### Tooling

- 🚀 Framework: [Next.js](https://nextjs.org/) and [React](https://reactjs.org/).
- 🖋️ Code: [TypeScript](typescriptlang.org/) and [Babel](https://babeljs.io/).
- 🖌️ Style: [Linaria](https://linaria.dev/).
- 🧪 Test: [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/).
- 🧷 Lint: [ESLint](https://eslint.org/), [stylelint](https://stylelint.io/), and
  [MarkdownLint](https://github.com/DavidAnson/markdownlint).
- 📐 Format: [Prettier](https://prettier.io/) and [EditorConfig](https://editorconfig.org/).
- ✍️ Commit: [Commitizen](http://commitizen.github.io/cz-cli/) and [commitlint](https://commitlint.js.org/#/).
- 🧞 Generate: [PLOP](https://plopjs.com/).

#### Recommended VSCode extensions

- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel).
- [Document This](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis).
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv).
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest).
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint).
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).
- [Visual Studio Code Commitizen Support](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen).
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components).

### Folder structure

```text
├───.eslint     # ESlint rules and settings.
├───.husky      # Husky git hooks.
├───.plop       # PLOP generators and templates.
├───components  # UI components.
├───data        # Data files.
├───pages       # Next.js pages and routes.
│   └───api     # Next.js API endpoints.
├───public      # Public file assets.
├───scripts     # Build and development scripts.
├───styles      # Global styles.
├───tests       # Global tests and configuration.
└───typings     # Custom TypeScript declarations.
```

### Commands

General commands (e.g. `yarn dev`):

| Command    | Description                                 |
| ---------- | ------------------------------------------- |
| `dev`      | Start development server.                   |
| `build`    | Do a production build.                      |
| `start`    | Start Next.js server (after doing a build). |
| `commit`   | Run Commitizen CLI after staging files.     |
| `lint`     | Run all linters.                            |
| `lint:*`   | Run a specific linter.                      |
| `format`   | Run all formatters.                         |
| `format:*` | Run a specific formatter.                   |
| `test`     | Run tests.                                  |
| `coverage` | Run coverage.                               |

Specific tools:

| Command        | Description       |
| -------------- | ----------------- |
| `commitlint`   | Run commitlint.   |
| `eslint`       | Run ESLint.       |
| `generate`     | Run PLOP.         |
| `markdownlint` | Run MarkdownLint. |
| `prettier`     | Run Prettier.     |
| `stylelint`    | Run stylelint.    |

### Environment variables

For the local environment you can set these in `.env.local`.

| Variable   | Required | Default | Description                                  |
| ---------- | -------- | ------- | -------------------------------------------- |
| `BASE_URL` | Yes      |         | Base site URL, e.g. `http://localhost:3000`. |

### Generators

Use [PLOP](https://plopjs.com/) generators to bootstrap new files. See `plopfile.ts`
and `.plop/`.

You can run the generators with `yarn generate` (e.g. `yarn generate component`
or `yarn generate component "Hello World"`).

| Generator   | Description                                     |
| ----------- | ----------------------------------------------- |
| `local`     | Create `.env.local` with environment variables. |
| `component` | Create a new component.                         |
