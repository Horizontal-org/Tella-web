# Tella Web

Install and run the development server:

```bash
npm install
npm run dev
```
Or you can run Storybook to work with the components and layouts.

```bash
npm run storybook
```

## Frameworks and libraries used:
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Tailwindscss](tailwindcss.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [ClassNames](https://github.com/JedWatson/classnames)

## Development tools:
- [Storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## About using React
As React is being used in conjunction with NextJs it is not necessary to import it into the **tsx/jsx** files.

Components are programmed as functions and not as classes, using React Hooks for managing the state and lifecycle 
of the component.

## CSS
Most of the design should be done using the TailwindCSS classes, using custom CSS code as little as possible and
always limited to the component itself through its CSS module.

## Storybook
It is recommended to generate the Storybook views of each component and layout of the system, it is considered 
the documentation and is part of the review process.

## Cypress
If a bug is detected, it is recommended to use Cypress to reproduce the use case case and verify its correct solution.

## Precommit
This project uses [Husky](https://github.com/typicode/husky) to run a series of commands before committing,
like check and fix the code format.
It is recommended not to avoid or cancel this action, as the formatting will be checked in Continuous Integration and
will fail if it is not correct.

