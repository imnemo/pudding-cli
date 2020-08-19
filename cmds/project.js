const yargs = require('yargs');

exports.command = ['project'];
exports.desc = 'CLI工程管理';

/**
 * build args
 *
 * @param {yargs.Argv<{}>} yargsIns yargs instance
 */
exports.builder = (yargsIns) => {
  yargsIns
    .commandDir('project')
    .demandCommand(1, '请至少提供一个命令!');
};
