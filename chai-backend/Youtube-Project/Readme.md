# Hitesh Sir Backend Course Practice

## Backend Standard Project file structure

#### Normal Working Files

- .gitkeep : it allow to track
- .gitignore : it exclude file changes track and does not push to github eg .env(environment variable) file

#### Files Required inside src folder

- app.js
- constant.js
- index.js

#### Folders Required inside src folder

- middlewares
- controllers
- db
- routes
- utils
- models

Dev Dependency Files (Note It should be install with `-D or --save-dev` becoz it is only used during development phase but not in production)

- Nodemon | (automatically start and stop server to refresh content similar to live server) | command : `npm install --save-dev nodemon `
- Prettier | (code format for all team in backend to make them align on same page) | command : `npm i -D prettier`
  - It require 2 files for code format and rule setting
  - `.prettierrc` & `.prettierignore`

#### .prettierrc file

```
{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"semi": true,
"trailingComma": "es5"
}
```

#### .prettierignore file

```
/.vscode
/node_modules
./dist

*.env
.env
.evn.*
```

## Models

Youtube Project : [Youtube Project Models](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## View

## Middlewares

## Controllers
