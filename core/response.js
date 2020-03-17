const yargs = require('yargs');
const { signale } = require('./signale');

module.exports = {
  success() { },
  error(e) {
    if (yargs.argv.env === 'local') {
      signale.error(e);
    } else {
      signale.error(e.message);
    }
  },
  fatal(e, exitCode = 1, isShowHelp = true) {
    let err;
    if (e instanceof Error) {
      if (yargs.argv.env === 'local') {
        err = e;
      } else {
        err = e.message;
      }
    } else {
      err = e;
    }

    signale.fatal(err);

    if (isShowHelp === true) {
      yargs.showHelp();
    }

    process.exit(exitCode);
  },
};
