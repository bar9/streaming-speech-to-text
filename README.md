# Streaming speech to text
An angular module for connecting to streaming speech to text APIs (such as rev.ai)

# Goal
Provide a configurable Angular module with a recorder and a transcript player.

# Todo
- [x] first graphical POC
- [ ] audio recording
- [ ] connect to rev.ai API (with or without node SDK)
- [ ] (maybe) relay over node backend (see challenges)
- [ ] clean up dependencies

# Challenges
* The official node client relies on the stream API. There are userland implementations, but linking will
  probably not be straightforward.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

---
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
