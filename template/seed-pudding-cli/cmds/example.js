
exports.command = ['example'];
exports.desc = '测试及演示，特性试验场';

exports.builder = (yargs) => {
  yargs
    .commandDir('example')
    .demandCommand(1, '请至少提供一个命令!');
};
