exports.command = ['command'];
exports.desc = '命令管理';

exports.builder = (yargs) => {
  yargs
    .commandDir('command')
    .demandCommand(1, '请至少提供一个命令!');
};
