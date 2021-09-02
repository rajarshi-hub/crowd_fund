const routes = require('next-routes')();
routes.add('/campaign/new','/campaign/new')
.add('/campaign/:address','/campaign/show')
.add('/campaign/:address/request','/campaign/request')
.add('/campaign/:address/request/new','/campaign/newreq')
module.exports = routes;