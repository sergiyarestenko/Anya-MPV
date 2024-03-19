// import bs from "browser-sync";

import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();

export default function bs_html() {
	
	browserSync.init({
		server: {
			baseDir: 'build/',
			host: '192.168.0.104',
		},
		callbacks: {
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