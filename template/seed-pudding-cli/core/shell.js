
const shelljs = require('shelljs');
const yargs = require('yargs');

function resetConfig() {
  shelljs.config.fatal = false;
  shelljs.config.verbose = true;
  shelljs.config.silent = false;
}
resetConfig();

module.exports = {
  shelljs,
  setFatal(isFatal) {
    this.shelljs.config.fatal = !!isFatal;
  },
  setVerbose(isVerbose) {
    this.shelljs.config.verbose = !!isVerbose;
  },
  setSilent(isSilent) {
    this.shelljs.config.silent = !!isSilent;
  },
  resetConfig,
  formatCommand(command) {
    let { argv } = yargs;
    /**
     * 统一加 --verbose 后缀
     * 可以判断shell command具体是什么，来决定加verbose还是类似verbose的啥
     * 如 判断是npm 则就加--verbose
    */
    let subfix = '';
    if (argv.verbose === true) {
      subfix += ' --verbose';
    }
    return command + subfix;
  },
  execExitOnError() {
    // eslint-disable-next-line prefer-rest-params
    let result = shelljs.exec(...arguments);
    if (result.code !== 0) {
      process.exit(result.code);
    }
    return result;
  },
  execThrowOnError() {
    // eslint-disable-next-line prefer-rest-params
    let result = shelljs.exec(...arguments);
    if (result.code !== 0) {
      let err = new Error(result.stderr);
      err.shelljsExecResult = result;
      throw err;
    }
    return result;
  },
  getCliParamOptList() {
    let paramList = process.argv.slice(2);
    let paramOptList = [];
    paramList.forEach((param, i) => {
      if (!param.startsWith('-')) {
        let preParam = paramList[i - 1];
        if (!preParam) return;
        if (!preParam.startsWith('-')) return;
        if (preParam.startsWith('--') && preParam.includes('=')) { return; }
      }
      paramOptList.push(param);
    });
    return paramOptList;
  },
};
