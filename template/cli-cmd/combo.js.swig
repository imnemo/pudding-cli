const yargs = require('yargs');

exports.command = ['{{name}}'];
exports.desc = '{{desc}}';

/**
 * build args
 *
 * @param {yargs.Argv<{}>} yargsIns yargs instance
 */
exports.builder = (yargsIns) => {
  yargsIns
    .commandDir('{{name}}')
    .demandCommand(1, '请至少提供一个命令!');
};