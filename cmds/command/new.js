const fs = require('fs-extra');
const swig = require('swig');
const { pkginfo, response } = require('@/lib');
const { signale } = require('@/lib').signale;
const { toolConfig } = require('@/config');

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
    localPkgInfo = require(`${process.cwd()}/package.json`);
  } catch (e) {
    response.fatal('请到CLI工程目录下执行!', 1, false);
  }

  let name = argv._[2];
  if (!name) {
    response.fatal('请指定命令名称!', 2);
  }

  let cmdPath = `cmds${argv.path ? `/${argv.path}` : ''}`;
  let cmdFile = `${cmdPath}/${name}.js`;

  if (await fs.pathExists(`${process.cwd()}/${cmdFile}`)) {
    response.fatal(`${cmdFile} 已存在!`, 3, false);
  }

  let tplName = argv.combo ? 'combo' : 'cmd';
  let tplFile = `${toolConfig.root.toolProject}/template/cli-cmd/${tplName}.js.swig`;
  let tplInfo = (await fs.readFile(tplFile)).toString();
  let cmdInfo = swig.render(tplInfo, { locals: { name } });
  await fs.writeFile(cmdFile, cmdInfo);

  if (argv.combo) {
    await fs.mkdir(`${process.cwd()}/${cmdFile}`.slice(0, -3));
  }

  signale.success(`${name} 新建成功!`);
  signale.note(`可以试试执行:

  ${pkginfo.getMainBinName()} ${cmdPath.slice(5).replace(/\//g, ' ')} ${name} -h
  `);
};
