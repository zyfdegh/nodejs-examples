var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/', function(req, resp) {
    resp.send('hello')
})

// get /users/123
app.get('/users/:id', function(req, resp) {
    console.log('got user id: ' + req.params.id)
    resp.send(req.params)
})

// this api shows how to convert km to mile, or mile to km
// convert unit1(value) to unit2
//
// get /convert/km-mile/1
// get /convert/mile-km/1
app.get('/convert/:unit1-:unit2/:value', function(req, resp) {
    var unit1 = req.params.unit1
    var unit2 = req.params.unit2
    var value = req.params.value
    var ratio = 0.621371

    if (unit1 == 'km' && unit2 == 'mile') {
        var result = value * ratio
        console.log(value + ' km -> ' + result + ' mile')
        var obj = new Object()
        obj.result = result
        resp.send(obj)
    }

    if (unit1 == 'mile' && unit2 == 'km') {
        var result = value / ratio
        console.log(value + ' mile -> ' + result + ' km')

        var obj = new Object()
        obj.result = result
        resp.send(obj)
    }
})

// query params
// get /users?limit=10&offset=20
app.get("/users", function(req, resp) {
    limit = req.query.limit
    offset = req.query.offset
    console.log("limit: " + limit + ", offset: " + offset)
    resp.send(req.query)
})

// decode(if need) body
// post /users
// {
//     "username": "tom",
//     "password": "secret"
// }
app.post("/users", function(req, resp) {
    username = req.body.username
    password = req.body.password
    console.log(username)
    // console.log(password)
    resp.send(req.body)
})

app.listen(3000, function() {
    console.log('server listening on :3000')
})