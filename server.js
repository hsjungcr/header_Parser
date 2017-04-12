var express = require('express')
var app = express()
var port = process.env.PORT||8000
var bodyParser = require('body-parser')


app.listen(port,() => console.log('Listening on port: ' + port))

app.get('/' , (req, res)=>{
	var ip = req.headers['x-forwarded-for']|| req.connection.remoteAddress;
	if (ip.substr(0,7) == "::ffff:") {
		ip = ip.substr(7);
	}
        var lang = req.headers["accept-language"].split(",")[0]
	var software = req.headers["user-agent"].match(/\((.+?)\)/)[1]
	var out = {"ipaddress":ip,"language":lang,"software":software}
	res.send(out)
})

app.get('/',(req,res)=>{
	res.send(req.body)
})

