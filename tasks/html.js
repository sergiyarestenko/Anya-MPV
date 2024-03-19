import gulp from "gulp";
const { src, dest } = gulp;

import include from "gulp-file-include";
import bs from "browser-sync";

export default function html() {
  return src(["src/pages/*.html", "!src/components/**/*.html"])
    .pipe(include())
    .pipe(dest("build"))
    .pipe(bs.stream());
}
