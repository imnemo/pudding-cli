
const fs = require('fs-extra');
const swig = require('swig');
const { signale } = require('@/lib').signale;
const { response } = require('@/lib');
const { toolConfig } = require('@/config');

exports.command = ['new'];
exports.desc = '新建一个CLI工程';

let yargsIns;

exports.builder = (yargs) => {
  yargsIns = yargs;
  yargs
    .example(`
pudding project new \${projectName}
pudding project new --name \${projectName}
    `)
    .option('name', {
      alias: 'n',
      describe: '工程名',
      // demandOption: true,
    });
};

exports.handler = async (argv) => {
  let projName = argv._[2] || argv.name;
  if (!projName) {
    response.fatal('请指定工程名!', 1);
  }

  let projPath = `${process.cwd()}/${projName}`;
  if (await fs.pathExists(projPath)) {
    response.fatal(`${projPath}已存在!`, 2, false);
  }

  signale.pending(`拷贝工程模板到${projPath}`);
  await fs.copy(`${toolConfig.root.toolProject}/template/seed-pudding-cli`, projPath);

  signale.pending('生成新工程package.json');
  let pkgTplFile = `${projPath}/package.json.swig`;
  let pkgTplInfo = (await fs.readFile(pkgTplFile)).toString();
  let pkgInfo = swig.render(pkgTplInfo, { locals: { name: projName } });
  await fs.writeFile(pkgTplFile.slice(0, -5), pkgInfo);
  await fs.remove(pkgTplFile);

  signale.success(`${projName}新建成功!`);
  signale.note(`请执行后续命令: 

    cd ${projName}
    npm i. - g
    ${projName} completion
  `);
};
