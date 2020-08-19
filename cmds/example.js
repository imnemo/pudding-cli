const yargs = require('yargs');

exports.command = ['example'];
exports.desc = '测试及演示，特性试验场';

/**
 * build args
 *
 * @param {yargs.Argv<{}>} yargsIns yargs instance
 */
exports.builder = (yargsIns) => {
  yargsIns
    .commandDir('example')
    .demandCommand(1, '请至少提供一个命令!');
};
