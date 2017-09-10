var electron = require('electron');
var path = require('path');
var url = require('url');

var window = null;

electron.app.once('ready', function () {
  window = new electron.BrowserWindow({
    width: 1024,
    height: 768,
    titleBarStyle: 'hidden',
    backgroundColor: '#111',
    show: false,
    icon: __dirname + ''
  });
  window.loadURL(url.format({
    pathname: path.join(_dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  window.once('ready-to-show', function () {
    window.show()
  })
})
