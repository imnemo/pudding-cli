const yargs = require('yargs');
const { signale } = require('@/lib').signale;

exports.command = ['{{name}}'];
exports.desc = '{{desc}}';

/**
 * build args
 *
 * @param {yargs.Argv<{}>} yargsIns yargs instance
 */
exports.builder = (yargsIns) => {
  yargsIns
    .option('foo', {
      alias: 'f',
      describe: 'param foo for test',
    });
};

exports.handler = async (argv) => {
  signale.debug(`\nargvs from yargs: ${JSON.stringify(argv, null, 2)}`);
  signale.debug(`\nargvs from process.argv: ${JSON.stringify(process.argv, null, 2)}`);
};

