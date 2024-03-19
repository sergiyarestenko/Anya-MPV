import gulp from 'gulp';
const {src, dest } = gulp;
import svgmin from 'gulp-svgmin';
import svgCss from 'gulp-svg-css-pseudo'


export default function svg_css() {
	return src('src/svg/css/**/*.svg')
		.pipe(svgmin({
			plugins: [{
					removeComments: true
				},
				{
					removeEmptyContainers: true
				}
			]
		}))
		.pipe(svgCss({
			fileName: '_svg',
			fileExt: 'scss',
			cssPrefix: '--svg__',
			addSize: false
		}))
		.pipe(dest('src/scss/global'))
}