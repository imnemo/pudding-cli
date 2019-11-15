
const path = require('path');
const os = require('os');
const pkginfo = require('../lib/pkginfo');

module.exports = {
  root: {
    toolProject: path.dirname(__dirname),
    userData: path.resolve(os.homedir(), `.${pkginfo.getMainBinName()}`),
  },
};
