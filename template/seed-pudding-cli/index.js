#!/usr/bin/env node

require('./bootstrap');

const yargs = require('yargs');
const { pkginfo, middleware, response } = require('@/lib');

const mainBinName = pkginfo.getMainBinName();

let program;

program = yargs
  .commandDir('cmds')
  .recommendCommands(true)
  .example(`
1. 可以通过 ${mainBinName} subcommand -h 查看子命令的详细帮助
`)
  .option('env', {
    alias: 'e',
    describe: '运行时环境',
    choices: ['unittest', 'local', 'staging', 'preview', 'production'],
    type: 'string',
    default: 'production',
  })
  .option('debug', {
    alias: 'd',
    describe: '是否是调试模式（打开所有日志）',
    type: 'boolean',
    default: false,
  })
  .option('verbose', {
    alias: 'V',
    describe: '打印命令的详细执行过程',
    type: 'boolean',
    default: false,
  })
  .demandCommand(1, '请至少提供一个命令!')
  .scriptName(mainBinName)
  .options({
    help: {
      alias: 'h',
      describe: '查看帮助信息',
    },
    version: {
      alias: 'v',
      describe: '查看当前版本',
    },
  });

program.middleware(middleware);

// eslint-disable-next-line no-unused-expressions
program.argv;

process.on('uncaughtException', (e) => {
  response.fatal(e, 1023, 1);
});
