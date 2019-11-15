
const debug = require('debug')('mcdevtools:config');
const toolConfig = require('./tool');

// eslint-disable-next-line import/no-dynamic-require
const userConfig = require(`${toolConfig.root.userData}/config`);

/**
 *  如果userConfig里，有与toolConfig重合的字段
 *  那么在这里，先判断用户配置有没有，没有的话，填充下toolConfig中的值到userConfig
 *  如:
 *  runtimeConfig = {
 *    bar: toolConfig.bar
 *  }
 *
*/
let runtimeConfig = {
  hello: 'world',
};
Object.assign(runtimeConfig, userConfig);

debug(`userConfig: ${JSON.stringify(runtimeConfig, null, 2)}`);
debug(`toolConfig: ${JSON.stringify(toolConfig, null, 2)}`);
module.exports = {
  userConfig: runtimeConfig,
  toolConfig,
};
