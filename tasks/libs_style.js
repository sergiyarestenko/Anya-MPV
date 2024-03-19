
import gulp from 'gulp';
const {src, dest } = gulp;
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import concat from 'gulp-concat';
import map from 'gulp-sourcemaps';
import chalk from 'chalk';
const plugins = [];





export default function libs_style(done) {
  if (plugins.length > 0) {
    return src(plugins)
      .pipe(map.init())
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(concat('libs.min.css'))
      .pipe(map.write('../sourcemaps/'))
      .pipe(dest('build/css/'))
  } else {
    return done(console.log(chalk.bgYellow(`${chalk.bold('WARNING!')} You did not add any CSS/SCSS plugins.`)));
  }
}