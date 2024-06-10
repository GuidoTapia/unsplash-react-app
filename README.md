# Unsplash React App

This is a demo app build with react and unsplash API to show developer abilities as a FE/Web engineer.

## Project Setup

Once you downloaded this project first run `yarn intall` command to get all the needed dependencies.

You will also need to create an `.env` file using as reference `.env.example`, you can alse have multilpe .env files for different environements or modes, more info on https://vitejs.dev/guide/env-and-mode

## Running Project

After install all the dependencies you should be able to run the project locally using the command `yarn dev`

A local server will start running at `http://localhost:4000/` in case the port is available

## App Demo

Current version of the app in `main` branch

https://github.com/GuidoTapia/unsplash-react-app/assets/31198370/c1122146-790c-41c5-a9c0-d91b8c8e1454


Proposed changes app, currently in `develop` branch and with an open PR(https://github.com/GuidoTapia/unsplash-react-app/pull/8)
Test App: https://66669fed00616e78823c53ee--sage-baklava-d521ed.netlify.app/

Demo Video:

[![Unsplash React Demo](https://img.youtube.com/vi/IxjOXUHSBSU/0.jpg)](https://youtu.be/IxjOXUHSBSU)

## Automated Tests

This project includes automated tests that must be succesful to merge new commits
To run tests use the command `yarn test`

## Demo Workshop for compoents

This project include components workshop using storybook, which allows to see and document components in a isolated environement
To run workshop use the command `yarn storybook` , a local server will start running at `http://localhost:6006/` in case the port is available

Workshop running should looks like this:

https://github.com/GuidoTapia/unsplash-react-app/assets/31198370/a2903422-3fb4-4fbd-ad20-8217a0447d9c

## Additional Validations

This project includes linter tools to avoid different code styles, the availavle commands are:

- `validate`: Run all the static validations including linters and check commits
- `yarn check-commits-since-main`: Check all commits on the current branch match commit message convention before merging to main
- `lint:all`: Run eslint over all the files to get warnings and errors
- `format:check`: Run prettier over all the files to get warnings and errors
- `format:write`: Run prettier over all the files to overwrite failing files if posible

## About of Proposed changes
They were made to improve app ui and show domain over styling and components libraries commonly used to reduce development time, They were kept on a different branch as an alternative, because of the understanding of how important is to follow as well as possible the requirements and how a better ui was not a must do, but could be a good to have
