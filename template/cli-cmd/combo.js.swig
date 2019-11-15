exports.command = ['{{name}}'];
exports.desc = '{{desc}}';

exports.builder = (yargs) => {
  yargs
    .commandDir('{{name}}')
    .demandCommand(1, '请至少提供一个命令!');
};