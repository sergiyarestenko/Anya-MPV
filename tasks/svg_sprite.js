import gulp from "gulp";
const { src, dest } = gulp;

import svgmin from "gulp-svgmin";
import sprite from "gulp-svg-sprite";


export default function svg_sprite() {
	return src('src/svg/**/*.svg')
		.pipe(svgmin({
			plugins: [{
					removeComments: true
				},
				{
					removeEmptyContainers: true
				}
			]
		}))
		.pipe(sprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(dest('src/img'))
}