(async function () {
  const {
    request,
    each,
    pick,
    isString,
    isBoolean
  } = app;
  const u = 'undefined';
  if (typeof require === u || typeof require('nw.gui') === u || typeof require('nw.gui')
    .Window === u || typeof process === u || typeof process.versions.nw === u || typeof process.versions.chromium === u) {
    const agent = pick(['appCodeName', 'appName', 'appVersion', 'cookieEnabled', 'hardwareConcurrency', 'language', 'languages', 'platform', 'product', 'productSub', 'userAgent', 'vendor'], navigator);
    each(navigator, (item, key) => {
      if (isString(item) || isBoolean(item)) {
        agent[key] = item;
      }
    });
    request('security.ban', {
      agent
    });
    window.location = 'https://hermes.menrvah.com/banned.html';
    $ = null;
  } else {
    $.cnsl(`APPCORE: ${process.versions.nw} BROWSER: ${process.versions.chromium} NODE: ${process.versions.node}`, 'alert');
  }
  //<obfuscate>
  const gui = require('nw.gui');
  const win = gui.Window.get();
  setInterval(() => {
    //win.closeDevTools();
  }, 0);
  //</obfuscate>
})();
