var express = require('express')
var request = require('request')

var app = express()

// // Full docs of package 'request'
// // https://www.npmjs.com/package/request
//
// // API is like following
// POST /user/signup HTTP/1.1
// Host: localhost:3000
// Content-Type: application/x-www-form-urlencoded
// Cache-Control: no-cache
//
// username=demo&email=demo%40linkeriot.io&password=1234qwer
function callAPI() {
    var options = {
        method: 'POST',
        url: 'http://localhost:3000/user/signup',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded'
        },
        form: {
            username: 'demo',
            email: 'demo@linkeriot.io',
            password: '1234qwer'
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

}


app.get('/', function(req, resp) {
    callAPI()
    resp.send('hellp')
})

app.listen(3000, function() {
    console.log('server listening on :3000')
})
