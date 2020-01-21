const myData = require("./myData.js");
const Polygon = require("./Polygon.js");
const _ = require("underscore");
const http = require("http");

const helloWorld = () => {
	console.log("Hello World!");
};

helloWorld();

myData.getMessage();

const myPoly = new Polygon(10, 15);
console.log(myPoly.height);

const myArray = [1, 2, 3, 5, 6, 7];
const found = _.contains(myArray, 3);
console.log(found);

// HTTP
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
	if(request.url === 'favicon.ico') {
		console.log('favicon requested');
	}
	
	console.log('request.url=' + request.url);
	//console.log('request.headers=' + JSON.stringify(request.headers));
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write("Hey there " + Math.random());
	response.end();
};

http.createServer(onRequest).listen(port);