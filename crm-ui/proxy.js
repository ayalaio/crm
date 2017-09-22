var connect = require('connect');
var modRewrite = require('connect-modrewrite');
var proxy = require('proxy-middleware');
var url = require('url');



var app = connect()
  .use(modRewrite([
    "^\/crm-server\/api\/v1.0\/(.*)    /send-to-api/crm-server/api/v1.0/$1 [L]",
    "^(.*)\/css\/(.*)                  /send-to-ui/css/$2 [L]",
    "^(.*)\/js\/(.*)                   /send-to-ui/js/$2 [L]",
    "^(.*)\/docs(.*)                   /send-to-ui/index.html?$2 [L]",
    "^(.*)\/help\/html\/(.*)           /send-to-ui/help/html/$2 [L]",
    "^(.*)\/fonts\/(.*)                /send-to-ui/fonts/$2 [L]",
    "^(.*)\/images\/(.*)               /send-to-ui/images/$2 [L]",
    "^(.*)?(.*)                        /send-to-ui/index.html?$2 [L]"
  ]))
  //.use('/send-to-api', proxy(url.parse('http://localhost:8080/')))
  .use('/send-to-ui',  proxy(url.parse('http://localhost:8000/')))
  .listen(9000)


var tcpPortUsed = require('tcp-port-used');
//Wait till application is listening to start proxy
tcpPortUsed.waitUntilUsed(8000,100,60000).then(function() {
    var open = require('open');
    open('http://localhost:9000');
}, function(err) {
    console.log('Could not connect to port 8000, Error:', err.message);
});
