module.exports = function(express, app){

	var route = function(url, file, callback){
		app.get(url, function (req, res){
			var params = typeof(callback) == "function" ? callback(req, res) : {};
			res.render(file, params);
		});
	};

	/* ---------------------------------------------------------------------- */
	/* GZIP COMPRESSION                                                       */
	/* ---------------------------------------------------------------------- */

	var compressFilter = function(req, res){
		return /json|text|javascript|dart|image\/svg\+xml|application\/x-font-ttf|application\/vnd\.ms-opentype|application\/vnd\.ms-fontobject/.test(res.getHeader('Content-Type'));
	};

	app.use(express.compress({
		threshold : 0, // in bytes
		filter : compressFilter
	}));

	/* ---------------------------------------------------------------------- */
	/* FAVICON                                                                */
	/* ---------------------------------------------------------------------- */

	app.use(express.favicon(__dirname + '/static/images/favicon.ico'));

	/* ---------------------------------------------------------------------- */
	/* REDIRECT TO WWW (ONLY IN PRODUCTION)                                   */
	/* ---------------------------------------------------------------------- */

	app.all(/.*/, function(req, res, next) {
		var host = req.header("host");

		if (host.match(/^127\..*/i) || host.match(/^192\..*/i) || host.indexOf("onmodulus")>-1) {
			//console.log("-- get --", host + req.originalUrl);
			next();
			return true;
		}

		if (host.match(/^www\..*/i)) {
			next();
		} else {
			res.redirect(301, "http://www." + host + req.originalUrl);
		}
	});

	/* ---------------------------------------------------------------------- */
	/* ROUTES                                                                 */
	/* ---------------------------------------------------------------------- */

	route('/', 'index.html');
    route('/index','index.html');
	route('/privacy', 'privacy.html');
	route('/about', 'about.html');
	route('/terms', 'terms.html');
	route('/support', 'support.html');
	route('/press', 'press.html');
	route('/background', 'background.html');
    route('/meni', 'menu.html');
    route('/single', 'single.html');


	/* ---------------------------------------------------------------------- */
	/* STATIC & ERRORS                                                        */
	/* ---------------------------------------------------------------------- */

	app.use('/static', express.static(__dirname + '/static'));

	app.use(function(req, res, next){
		res.render('404.html');
	});

};