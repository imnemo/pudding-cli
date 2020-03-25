#!/usr/bin/env node
require('../bootstrap');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const signal = require('signale');

const shell = require('../lib/shell');
const mainBinName = require('../lib/pkginfo').getMainBinName();

let config = require('../config/tool');

const { shelljs } = shell;
shell.setVerbose(false);
shell.setSilent(true);

(async () => {
  try {
    // 保证用户数据根目录存在
    await fs.ensureDir(path.dirname(config.root.userData));

    if (!await fs.pathExists(config.root.userData)) {
      await fs.copy(`${config.root.toolProject}/template/devtooluserdata`, config.root.userData);
    }

    signal.success(`${mainBinName} 安装成功，请使用\`${mainBinName} - h\`查看使用帮助，如下所示: `);
    console.log(`
\`\`\`bash

$ ${mainBinName} -h

${shelljs.exec(`${mainBinName} -h`)}

\`\`\`
`);
  } catch (e) {
    signal.fatal(e);
  }
})();
