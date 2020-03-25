const path = require('path');
const moduleAlias = require('module-alias');

/**
 * 因为命令模式下启动时，有可能无法读取到package.json里的配置
 * 所以采用编码的方式来配置
 */
moduleAlias.addAlias('@', path.resolve(__dirname, '.'));
