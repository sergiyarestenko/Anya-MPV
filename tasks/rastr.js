import gulp from "gulp";
const { src, dest } = gulp;

import changed from "gulp-changed";

import imagemin, {gifsicle, optipng, svgo} from "gulp-imagemin";

import recompress from "imagemin-jpeg-recompress";
import pngquant from "imagemin-pngquant";
import bs from "browser-sync";
import plumber from "gulp-plumber";

export default function rastr() {
  return src("src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)")
    .pipe(plumber())
    .pipe(changed("build/img"))
    .pipe(
      imagemin(
        {
          interlaced: true,
          progressive: true,
          optimizationLevel: 5,
        },
        [
          recompress({
            loops: 6,
            min: 50,
            max: 90,
            quality: "high",
            use: [
              pngquant({
                quality: [0.8, 1],
                strip: true,
                speed: 1,
              }),
            ],
          }),
          gifsicle(),
          optipng(),
          svgo(),
        ]
      )
    )
    .pipe(dest("build/img"))
    .pipe(bs.stream());
}
