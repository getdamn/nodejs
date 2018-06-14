var http = require('http');
http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var str="";
	str += "<html><body><table border='1';>";
	for(i in req.headers){
		str += "<tr><td>";
		str += i;
		str += "</td><td>";
		str += req.headers[i];
		str += "</td></tr>";
		}
	str += "</table></body></html>";
	res.write(str);
	res.end();
}).listen(8080);