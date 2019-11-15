
const signal = require('signale');
const { getCliParamOptList } = require('../../lib/shell');

exports.command = ['echo'];
exports.desc = '测试对argv的解析';

exports.builder = (yargs) => {
  yargs
    .option('camel-like', {
      describe: '会把连字符自动转为驼峰',
    });
};

exports.handler = async (argv) => {
  signal.info(`\nargvs from yargs: ${JSON.stringify(argv, null, 2)}`);
  signal.info(`\nargvs from process.argv: ${JSON.stringify(process.argv, null, 2)}`);
  signal.info(`\nparam opt list: ${JSON.stringify(getCliParamOptList(), null, 2)}`);
};
