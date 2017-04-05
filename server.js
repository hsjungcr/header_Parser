var express = require('express')
var moment = require('fs')
var path = require('path')

var app = express()
var port = process.env.PORT||8000

app.listen(port,() => console.log('Listening on port: ' + port))
app.get('/', (req, res) => {
	let fileName = path.join(__dirname,'index.html')
	res.sendFile(fileName, (err) => {
		if(err) {
			console.log(err)
			res.status(err.status).end()
		}
		else {
			console.log('Sent: ', filename)
		}
	}
}
