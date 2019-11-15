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
    "debug": "4.0.1",
    "fs-extra": "7.0.0",
    "inquirer": "6.2.1",
    "semver": "6.0.0",
    "shelljs": "0.8.3",
    "signale": "1.4.0",
    "swig": "1.4.2",
    "yargs": "14.2.0"
  },
  "devDependencies": {
    "eslint": "6.6.0",
    "eslint-config-airbnb-base": "14.0.0",
    "eslint-plugin-import": "2.18.2"
  }
}