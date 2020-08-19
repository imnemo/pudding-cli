const yargs = require('yargs');

exports.command = ['command'];
exports.desc = '命令管理';

/**
 * build args
 *
 * @param {yargs.Argv<{}>} yargsIns yargs instance
 */
exports.builder = (yargsIns) => {
  yargsIns
    .commandDir('command')
    .demandCommand(1, '请至少提供一个命令!');
};
