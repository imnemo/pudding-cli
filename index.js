#!/usr/bin/env node

const yargs = require('yargs');
const signal = require('signale');
const pkginfo = require('./lib/pkginfo');

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
    default: 'local',
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

// 这里只能全局捕获同步的异常，无法捕获async里的异常
program.fail((msg, err) => {
  // console.log(arguments);
  let e = msg ? new Error(msg) : (err instanceof Error ? err : new Error(err));
  signal.fatal(e.message);
  process.exit(1);
});

program.argv;

process.on('uncaughtException', (e) => {
  signal.fatal(e);
  process.exit(1);
});
