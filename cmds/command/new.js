
const signal = require('signale');
const fs = require('fs-extra');
const swig = require('swig');
const { shelljs } = require('../../lib/shell');
const { toolConfig } = require('../../config');
const pkginfo = require('../../lib/pkginfo');

exports.command = ['new'];
exports.desc = '新增一个命令';

let yargsIns;

exports.builder = (yargs) => {
  yargsIns = yargs;
  yargs
    .example(`
pudding command new --path command/subcommand --combo \${projectName}
    `)
    .option('path', {
      alias: 'p',
      describe: '命令路径',
      // demandOption: true,
    })
    .option('combo', {
      describe: '是否还有子命令',
      type: 'boolean',
      default: false,
    });
};

exports.handler = async (argv) => {
  let localPkgInfo;
  try {
    // eslint-disable-next-line import/no-dynamic-require
    localPkgInfo = require(`${process.cwd()}/package.json`);
    localPkgInfo.pudding.mainBinName;
  } catch (e) {
    signal.fatal('请到CLI工程目录下执行!');
    process.exit();
  }

  let name = argv._[2];
  if (!name) {
    signal.fatal('请指定命令名称!');
    yargsIns.showHelp();
    process.exit(1);
  }

  let cmdPath = `cmds${argv.path ? `/${argv.path}` : ''}`;
  let cmdFile = `${cmdPath}/${name}.js`;

  if (await fs.pathExists(`${process.cwd()}/${cmdFile}`)) {
    signal.fatal(`${cmdFile} 已存在!`);
    process.exit(2);
  }

  let tplName = argv.combo ? 'combo' : 'cmd';
  let tplFile = `${toolConfig.root.toolProject}/template/cli-cmd/${tplName}.js.swig`;
  let tplInfo = (await fs.readFile(tplFile)).toString();
  let cmdInfo = swig.render(tplInfo, { locals: { name } });
  await fs.writeFile(cmdFile, cmdInfo);

  if (argv.combo) {
    await fs.mkdir(`${process.cwd()}/${cmdFile}`.slice(0, -3));
  }

  signal.success(`${name} 新建成功!`);
  signal.note(`可以试试执行:

  ${pkginfo.getMainBinName()} ${cmdPath.slice(5).replace(/\//g, ' ')} ${name} -h
  `);
};
