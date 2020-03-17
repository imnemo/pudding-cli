const pkg = require('../package.json');

module.exports = {
  getInfo() {
    return pkg;
  },
  getPuddingConfig() {
    return pkg.pudding || {};
  },
  getMainBinName() {
    return this.getPuddingConfig().mainBinName;
  },
};
