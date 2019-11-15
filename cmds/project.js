exports.command = ['project'];
exports.desc = 'CLI工程管理';

exports.builder = (yargs) => {
  yargs
    .commandDir('project')
    .demandCommand(1, '请至少提供一个命令!');
};
