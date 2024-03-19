import gulp from 'gulp';
const {src, dest } = gulp;
import uglify from 'gulp-uglify-es';

import concat from 'gulp-concat';
import map from 'gulp-sourcemaps';
import chalk from 'chalk';

const plugins = [];


export default function libs_js(done) {
	if (plugins.length > 0)
		return src(plugins)
			.pipe(map.init())
			.pipe(uglify.default())
			.pipe(concat('libs.min.js'))
			.pipe(map.write('../sourcemaps'))
			.pipe(dest('build/js/'))
	else {
		return done(console.log(chalk.bgYellow(`${chalk.bold('WARNING!')} You did not add any JavaScript plugins.`)));
	}
}