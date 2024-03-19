import gulp from "gulp";
const { src, dest } = gulp;
import changed from "gulp-changed";
import ttf2woff2 from "gulp-ttftowoff2";
import ttf2woff from "gulp-ttf2woff";

export default function ttf(done) {
  return src("src/fonts/**/*.ttf")
    .pipe(
      changed("build/fonts", {
        extension: ".woff2",
        hasChanged: changed.compareLastModifiedTime,
      })
    )
    .pipe(ttf2woff2())
    .pipe(dest("build/fonts"));
  done();
}
