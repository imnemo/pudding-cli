{
  "name": "{{name}}",
  "version": "0.0.1",
  "description": "{{name}}",
  "bin": {
    "{{name}}": "index.js"
  },
  "pudding": {
    "mainBinName": "{{name}}"
  },
  "scripts": {
    "postinstall": "./script/postinstall.js"
  },
  "_moduleAliases": {
    "@": "."
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "license": "MIT",
  "keywords": [
    "oncoding",
    "@oncoding/pudding",
    "cli"
  ],
  "dependencies": {
    "chalk": "3.0.0",
    "debug": "4.1.1",
    "fs-extra": "8.1.0",
    "inquirer": "7.1.0",
    "module-alias": "2.2.2",
    "semver": "7.1.3",
    "shelljs": "0.8.4",
    "signale": "1.4.0",
    "swig": "1.4.2",
    "yargs": "15.3.0"
  },
  "devDependencies": {
    "eslint": "6.8.0",
    "eslint-config-airbnb-base": "14.0.0",
    "eslint-import-resolver-alias": "1.1.2",
    "eslint-import-resolver-node": "0.3.3",
    "eslint-plugin-import": "2.20.1"
  }
}