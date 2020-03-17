const { signale } = require('../../lib');

exports.command = ['{{name}}'];
exports.desc = '{{desc}}';

exports.builder = (yargs) => {
  yargs
    .option('foo', {
      alias: 'f',
      describe: 'param foo for test',
    });
};

exports.handler = async (argv) => {
  signale.debug(`\nargvs from yargs: ${JSON.stringify(argv, null, 2)}`);
  signale.debug(`\nargvs from process.argv: ${JSON.stringify(process.argv, null, 2)}`);
};

