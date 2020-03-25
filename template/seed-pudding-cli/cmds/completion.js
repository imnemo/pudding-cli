const os = require('os');
const path = require('path');
const signal = require('signale');

exports.command = ['completion'];
exports.desc = '生成自动补全的shell脚本';

let supportedShellList = ['zsh', 'bash'];

exports.builder = (yargs) => {
  yargs
    .option('shell', {
      alias: 's',
      describe: 'shell类型',
      choices: supportedShellList,
      type: 'string',
    });
};

exports.handler = async (argv) => {
  let shell = argv.shell || path.basename(os.userInfo().shell);
  if (!supportedShellList.includes(shell)) {
    signal.note(`${shell}类型的shell，暂不支持，为您fallback到bash类型!\n`);
    shell = 'bash';
  }

  signal.note(`请将下面的脚本，添加到你的${shell}配置中...\n`);
  require('yargs').showCompletionScript();

  if (shell === 'zsh') {
    signal.warn('zsh用户请额外添加以下代码至您的配置中...');
    console.log(`
###-begin-completion-for-zsh-###
autoload bashcompinit
bashcompinit
###-end-completion-for-zsh-###
    `);
  }
};
