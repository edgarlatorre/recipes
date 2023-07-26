# Recipes

This is a web application to find recipes given some ingridients.

This is a monorepo with backend, frontend and infrastructure folders.

[![BUILD](https://github.com/edgarlatorre/recipes/actions/workflows/ci.yml/badge.svg)](https://github.com/edgarlatorre/recipes/actions/workflows/ci.yml)

[https://recipes-elr.fly.dev/](https://recipes-elr.fly.dev/)

### Development

Even it's a monorepo it's still necessary to start both backend and frontend individually.

#### Backend

To setup the backend you can run the following commands inside the backend folder.

Install dependencies:

`bundle`

Setup the database

`bin/rails db:setup`

Populate the database with the json file inside the resources folder.

`bin/rails populate:from_json_file`

Start the server

`bin/rails s`

And, for running the tests you can run

`bin/rails t`

#### Frontend

To setup the frontend you can run the following commands inside the frontend folder.

Install dependencies

`npm i`

Run the application

`npm run dev`

Run the tests

`npm run test`
