var express = require("express"),
	swig = require("swig"),
	app = express(),
	server = require("http").createServer(app),
	io = require("socket.io").listen(server);

server.listen(process.env.PORT || 8080);

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("view cache", false);
app.set("views", __dirname + "/views");
io.set("log level", 1); // reduce logging

swig.setDefaults({cache:false}); // disable cache (comment for production)

/* -------------------------------------------------------------------------- */
/* ROUTING                                                                    */
/* -------------------------------------------------------------------------- */

require("./route")(express, app);

/* -------------------------------------------------------------------------- */
/* REALTIME                                                                   */
/* -------------------------------------------------------------------------- */

io.sockets.on("connection", function(socket){

	socket.emit("connected");

	// send a notification to the client in 3 seconds
	setTimeout(function(){
		socket.emit("testme", {
			id : 45487958,
			author : "neoartdoo",
			message : "Hello world!"
		});
	}, 3000);
	
	socket.on("refresh", function(e){
		/* dummy */
	});
});
console.log('Server je podesen i radi na localhost:8080 koga mozete otvoriti u brauzeru.');

/* -------------------------------------------------------------------------- */

