import gulp from "gulp";
const { watch, series, parallel } = gulp;

import {deleteAsync}  from "del";

import sync from 'browser-sync';

import libs_style from "./tasks/libs_style.js";
import svg_css from "./tasks/svg_css.js";
import fonts from "./tasks/fonts.js";
import style from "./tasks/style.js";
import build_js from "./tasks/build_js.js";
import libs_js from "./tasks/libs_js.js";
import dev_js from "./tasks/dev_js.js";
import html from "./tasks/html.js";
import rastr from "./tasks/rastr.js";
import webp from "./tasks/webp.js";
import svg_sprite from "./tasks/svg_sprite.js";
import ttf from "./tasks/ttf.js";
import ttf2 from "./tasks/ttf2.js";


const projectFolder = 'build';


const dev = gulp.parallel(
  libs_style,
  svg_css,
  fonts,
  style,
  build_js,
  libs_js,
  dev_js,
  html,
  series(rastr, webp),
  svg_sprite,
  ttf,
  ttf2,
)

export const clean = () => {
  return deleteAsync('./' + projectFolder + '/');
};


export const browserSync = () => {
  sync.init({
      ui: false,
      notify: false,
      browser: 'default',
      server: {
        baseDir:  './' + projectFolder + '/',
      },
  });
};

const watchSync = gulp.parallel(
  watching,
  browserSync
)


function watching() {
  watch("src/**/*.html", parallel(html));
  watch("src/**/*.scss", parallel(style));
  watch("src/**/*.js", parallel(dev_js));
  watch("src/**/*.json", parallel(html));
  watch("src/img/**/*.+(svg|ico)", parallel(rastr));
  watch("src/img/**/*.+(png|jpg|jpeg|gif)", series(rastr, webp));
  watch("src/svg/css/**/*.svg", series(svg_css, style));
  watch("src/svg/**/*.svg", series(svg_sprite, rastr));
  watch("src/fonts/**/*.ttf", series(ttf, ttf2, fonts));
}


export default gulp.series(
  clean,
  dev,
  watchSync,
);

