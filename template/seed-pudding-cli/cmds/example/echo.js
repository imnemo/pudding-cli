
const { getCliParamOptList } = require('@/lib/shell');
const { signale, interactive } = require('@/lib').signale;

exports.command = ['echo'];
exports.desc = '测试对argv的解析，以及其他试验';

exports.builder = (yargs) => {
  yargs
    .option('camel-like', {
      describe: '会把连字符自动转为驼峰',
    });
};

exports.handler = async (argv) => {
  signale.debug(`\nargvs from yargs: ${JSON.stringify(argv, null, 2)}`);
  signale.debug(`\nargvs from process.argv: ${JSON.stringify(process.argv, null, 2)}`);
  signale.debug(`\nparam opt list: ${JSON.stringify(getCliParamOptList(), null, 2)}`);

  signale.log('test log');

  signale.time();

  signale.await('test await');
  signale.complete('test complete');
  signale.fav('test fav');
  signale.info('test info');
  signale.note('test note');
  signale.pause('test pause');
  signale.pending('test pending');
  signale.star('test star');
  signale.start('test start');
  signale.success('test success');
  signale.wait('test wait');
  signale.watch('test watch');
  signale.warn('test warn');
  signale.error('test error');
  signale.fatal('test fatal');

  signale.timeEnd();
};
