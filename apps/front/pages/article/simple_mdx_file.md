# Frontend Template

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center; width: 120px"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

### The overall project description

Theses are different stack used in this project

Below are our core plugins:

- [NextJs](https://nextjs.org/)
- [TailwindCss](https://tailwindcss.com)
- [NextUI](https://nextui.org/)
- [Graphql](https://graphql.org/)
- [Typescript](https://www.typescriptlang.org/)

### Running the project

#### this project was configure to run with [StrapiCms](https://strapi.io/) but you can run it with any graphql server that you want

- in `apps/front/` create a .env file using the .env.example structure
- in `graphql/Schemas` create your schemas that matches your graphql api
- Run
  - `yarn install` or
  - `npm install`
- generate types from Graphql Schemas
  - ``yarn run codegen``
- and then
  - ``yarn run start``

```javascript
import link from "next/link"

console.log("alexandre mwenze")
```

## Running unit tests

Run `yarn run test` to execute the unit tests via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.
