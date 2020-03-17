const yargs = require('yargs');
const { Signale } = require('signale');
const loggerTypes = require('signale/types');

let defaultOptions = {
  logLevel: 'warn',
  types: JSON.parse(JSON.stringify(loggerTypes)),
};

/**
 * 把debug和log的logLevel改为debug，其他的全部改为warn
*/
Object.keys(defaultOptions.types).forEach((t) => {
  let type = defaultOptions.types[t];
  if (['debug', 'log'].includes(type.label)) {
    type.logLevel = 'debug';
  } else {
    type.logLevel = 'warn';
  }
});

const interactiveOptions = JSON.parse(JSON.stringify(defaultOptions));
interactiveOptions.interactive = true;

const signale = new Signale(defaultOptions);
const interactive = new Signale(interactiveOptions);

const configSigale = (option) => {
  let { argv } = yargs;
  if (argv.debug === true) {
    /**
     * @todo
     *  signale没有提供一个类似setLogLevel的api，来实现运行时修改logLevel
     *  所以 暂时修改下私有属性
     *  可以给signale提一个pr
    */
    // eslint-disable-next-line no-underscore-dangle
    signale._generalLogLevel = 'info';
    // eslint-disable-next-line no-underscore-dangle
    interactive._generalLogLevel = 'info';
  }
};

module.exports = {
  signale, interactive, configSigale,
};
