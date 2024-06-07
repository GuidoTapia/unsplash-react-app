# Unsplash React App

## Project Setup

Once you downloaded this project first run `yarn intall` command to get all the needed dependencies

## Running Project

After install all the dependencies you should be able to run the project locally using the command `yarn dev`

A local server will start running at `http://localhost:4000/` in case the port is available

## Automated Tests

This project includes automated tests that must be succesful to merge new commits
To run tests use the command `yarn test`

## Demo Workshop for compoents

This project include components workshop using storybook, which allows to see and document components in a isolated environement
To run workshop use the command `yarn storybook` , a local server will start running at `http://localhost:6006/` in case the port is available

## Additional Validations

This project includes linter tools to avoid different code styles, the availavle commands are:

- `validate`: Run all the static validations including linters and check commits
- `yarn check-commits-since-main`: Check all commits on the current branch match commit message convention before merging to main
- `lint:all`: Run eslint over all the files to get warnings and errors
- `format:check`: Run prettier over all the files to get warnings and errors
- `format:write`: Run prettier over all the files to overwrite failing files if posible
