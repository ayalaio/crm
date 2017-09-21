var connect = require('connect');
var modRewrite = require('connect-modrewrite');
var proxy = require('proxy-middleware');
var url = require('url');



var app = connect()
  .use(modRewrite([
    "^\/uno-server\/api\/v2.0\/(.*)    /send-to-api/uno-server/api/v2.0/$1 [L]",
    "^(.*)\/anon_(.*).js$              /send-to-ui/js/viewModels/anon.js [L]",
    "^(.*)\/anon_(.*).html$            /send-to-ui/js/views/anon.html [L]",
    "^(.*)\/css\/(.*)                  /send-to-ui/css/$2 [L]",
    "^(.*)\/js\/(.*)                   /send-to-ui/js/$2 [L]",
    "^(.*)\/docs(.*)                   /send-to-ui/index.html?$2 [L]",
    "^(.*)\/help\/html\/(.*)           /send-to-ui/help/html/$2 [L]",
    "^(.*)\/fonts\/(.*)                /send-to-ui/fonts/$2 [L]",
    "^(.*)\/images\/(.*)               /send-to-ui/images/$2 [L]",
    "^(.*)?(.*)                        /send-to-ui/index.html?$2 [L]"
  ]))
  .use('/send-to-api', proxy(url.parse('http://adc01jsm.us.oracle.com:8001/')))
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
