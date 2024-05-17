# 0 - Working with NextJS and TypeScript

* Status: accepted <!-- optional -->
* Deciders: Everyone <!-- optional -->
* Date: 5/17/2024, 11:36:00 AM <!-- optional -->
* Template used: [MADR 3.0.0](https://adr.github.io/madr/) <!-- optional -->

## Context and Problem Statement

When working with Next.js, developers often face the decision of whether or not to incorporate TypeScript into their projects. TypeScript offers static typing and other advantages, but it also adds complexity and requires additional setup.

## Decision Drivers <!-- optional -->

* Need for type safety and better code quality
* Desire to leverage TypeScript features such as interfaces and generics

## Considered Options

* Using TypeScript with Next.js
* Using JavaScript without TypeScript

## Decision Outcome

Chosen option: "Using TypeScript with Next.js", because it provides better type safety and code quality, which are essential for maintaining large-scale applications.

### Positive Consequences <!-- optional -->

* Improved type safety leads to fewer runtime errors
* TypeScript's static analysis helps catch bugs early in the development process
* Enhanced developer experience with features like auto-completion and type inference

### Negative Consequences <!-- optional -->

* Initial setup and learning curve associated with TypeScript
* Potential overhead in terms of build time and complexity, especially for smaller projects

## Pros and Cons of the Options <!-- optional -->

### Using TypeScript with Next.js

* Good, because it provides type safety and improves code quality
* Good, because TypeScript features enhance developer productivity
* Bad, because it adds initial setup and learning curve overhead

### Using JavaScript without TypeScript

* Good, because it avoids the setup and learning curve of TypeScript
* Bad, because it lacks the benefits of static typing and TypeScript features
* Bad, because it may lead to more runtime errors and maintenance challenges in the long term

## Links <!-- optional -->

* https://nextjs.org/docs/pages/building-your-application/configuring/typescript
* https://nextjs.org/docs/app/building-your-application/styling/tailwind-css

<!-- markdownlint-disable-file MD013 -->