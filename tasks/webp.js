import gulp from "gulp";
const { src } = gulp;

import webpConv from "gulp-webp";

import changed from "gulp-changed";
import multiDest from "gulp-multi-dest";
import plumber from "gulp-plumber";

export default function webp() {
  return src("build/img/**/*.+(png|jpg|jpeg)")
    .pipe(plumber())
    .pipe(
      changed("build/img", {
        extension: ".webp",
      })
    )
    .pipe(webpConv())
    .pipe(multiDest(["src/img", "build/img"]));
}
