var express = require('express')
var app = express()
var port = process.env.PORT||8000
var bodyParser = require('body-parser')


app.listen(port,() => console.log('Listening on port: ' + port))

app.get('/' , (req, res)=>{
	var lang = req.headers["accept-language"].split(",")[0]
	var software = req.headers["user-agent"].match(/\((.+?)\)/)[1]
	var out = {"ipaddress":req.ip,"language":lang,"software":software}
	res.send(out)
})

app.get('/',(req,res)=>{
	res.send(req.body)
})

//app.get('/', (req, res) => {
//	let fileName = path.join(__dirname,'index.html')
//	res.sendFile(fileName, (err) => {
//		if(err) {
//			console.log(err)
//			res.status(err.status).end()
//		}
//		else {
//			console.log('Sent: ', filename)
//		}
//	}
//}
