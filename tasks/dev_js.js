import gulp from 'gulp';
const {src, dest } = gulp;

import uglify from 'gulp-uglify-es';
import concat from 'gulp-concat';
import map from 'gulp-sourcemaps';
import bs from 'browser-sync';

export default function dev_js() {
	return src(['src/components/**/*.js', 'src/js/01_main.js'])
		.pipe(map.init())
		.pipe(uglify.default())
		.pipe(concat('main.min.js'))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/js/'))
		.pipe(bs.stream())
}