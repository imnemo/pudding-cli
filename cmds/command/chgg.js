const signal = require('signale');

exports.command = ['chgg'];
exports.desc = '';

exports.builder = (yargs) => {
  yargs
    .option('foo', {
      alias: 'f',
      describe: 'param foo for test',
    });
};

exports.handler = async (argv) => {
  signal.info(`\nargvs from yargs: ${JSON.stringify(argv, null, 2)}`);
  signal.info(`\nargvs from process.argv: ${JSON.stringify(process.argv, null, 2)}`);
};

