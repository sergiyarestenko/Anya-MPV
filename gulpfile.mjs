import gulp from "gulp";
const { watch, series, parallel, src, dest, task } = gulp;

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
import bs_html from "./tasks/bs_html.js";



task(
  "default",
  series(
    bs_html,
    parallel(
      libs_style,
      svg_css,
      fonts,
      style,
      build_js,
      libs_js,
      dev_js,
      html,
      rastr,
      webp,
      svg_sprite,
      ttf,
      ttf2,
      watching
    )
  )
);



function watching() {
  watch("src/**/*.html", parallel(html));
  // watch('src/**/*.php', parallel('php'));
  watch("src/**/*.scss", parallel(style));
  watch("src/**/*.js", parallel(dev_js));
  watch("src/**/*.json", parallel(html));
  watch("src/img/**/*.+(svg|ico)", parallel(rastr));
  watch("src/img/**/*.+(png|jpg|jpeg|gif)", series(rastr, webp));
  watch("src/svg/css/**/*.svg", series(svg_css, style));
  watch("src/svg/**/*.svg", series(svg_sprite, rastr));
  watch("src/fonts/**/*.ttf", series(ttf, ttf2, fonts));
}

// export const run = gulp.parallel(
//   libs_style,
//   svg_css,
//   ttf,
//   ttf2,
//   fonts,
//   style,
//   libs_js,
//   dev_js,
//   rastr,
//   webp,
//   svg_sprite,
//   html,
//   bs_html,
//   watch
// )
// export const dev_php = gulp.parallel(
//   libs_style,
//   svg_css,
//   ttf,
//   ttf2,
//   fonts,
//   style,
//   libs_js,
//   dev_js,
//   rastr,
//   webp,
//   svg_sprite,
//   php,
//   bs_php,
//   watch
// )
