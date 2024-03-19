import gulp from "gulp";
const { src, dest } = gulp;
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import bulk from "gulp-sass-bulk-importer";
import prefixer from "gulp-autoprefixer";
import clean from "gulp-clean-css";
import concat from "gulp-concat";
import map from "gulp-sourcemaps";
import bs from "browser-sync";

export default function style() {
  return src("src/scss/**/*.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      prefixer({
        overrideBrowserslist: ["last 8 versions"],
        browsers: [
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 11",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6",
        ],
      })
    )
    .pipe(
      clean({
        level: 2,
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(map.write("../sourcemaps/"))
    .pipe(dest("build/css/"))
    .pipe(bs.stream());
}
