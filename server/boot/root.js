'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  var path = require('path');
  router.get('/', /*server.loopback.status()*/function(req, res) { 
    res.sendFile('index.html', {root: path.resolve(__dirname, '../../client/')});
  });
  server.use(router);
};
