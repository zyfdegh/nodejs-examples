var express = require('express')
var app = express()

app.get('/', function(req, resp) {
    resp.send('heelo')
})

// get /acd
// get /abcd
app.get('/ab?cd', function(req, resp) {
    resp.send('ab?cd')
})

// get /eghjk
// get /efghjk
// get /eghijk
// get /efghijk
app.get('/ef?ghi?jk', function(req, resp) {
    resp.send('ef?ghi?jk')
})

// get /google
// get /gooogle
// get /goooogle
// ...
app.get('/goo+gle', function(req, resp) {
    resp.send('goo+gle')
})

// get /abcd
// get /abxcd
// get /ab233cd
// ...
app.get('/ab*cd', function(req, resp) {
    resp.send('ab*cd')
})

// get /abe
// get /abcde
app.get('/ab(cd)?e', function(req, resp) {
    resp.send('ab(cd)?e')
})

// get /1abc
// get /abc233
// get /vv1abcvv
app.get(/abc/, function(req, resp) {
    resp.send('/abc/')
})

// think about what will happen, if more than 2+ routers handles with on route
// example:
//
// // get /ac
// // get /abc
// app.get('/a(b)?c')
//
// and
// 
// // get /abc
// app.get('/abc')

// let's have a try

// this one is conflict with the above one, in fact, this is contained in the above regex match
// get /abc
app.get('/abc', function(req, resp) {
    resp.send('abc')
})

// the conclusion is:
// the router defined previous will work, the latter one won't

// This route path will match butterfly and dragonfly, 
// but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, function(req, resp) {
    resp.send('/.*fly$/')
})

app.listen(3000, function() {
    console.log('server listening on :3000')
})