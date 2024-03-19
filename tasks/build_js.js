import gulp from 'gulp';
const {src, dest } = gulp;

import uglify from 'gulp-uglify-es';
import babel from 'gulp-babel';

import concat from 'gulp-concat';

export default function build_js() {
	return src(['src/components/**/*.js', 'src/js/01_main.js'])
		.pipe(uglify.default())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.min.js'))
		.pipe(dest('build/js/'))
}