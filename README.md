# StreamViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Assumptions
- Hardcoded link to Funhaus YT channel because they are gaming-related and always live
- Did not store user profiles in persistent storage
- Did not differentiate between a regular "viewer" and a "super fan"

## Development server

This app runs 3 servers for development: MongoDB, nodemon, and Angular.

Run `mongod` to start the MongoDB server. Make sure you have MongoDB installed globally on your machine.

Run `npm run nodemon` to start the nodemon server which will restart everytime you make changes to `server.js`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
