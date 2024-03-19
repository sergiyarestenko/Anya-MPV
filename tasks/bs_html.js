// import bs from "browser-sync";

import browserSync from 'browser-sync';
// const browserSync = bsCreate();

export default function bs_html() {
	
	browserSync({
		server: {
			baseDir: 'build/',
			host: '192.168.0.104',
		},
		callbacks: {
			msg: function(s) {
				console.log(s);
			}, 
			ready: function (err, bs) {
				bs.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		browser: 'default',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}