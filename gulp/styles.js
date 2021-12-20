import gulp from 'gulp'
import config from './_config.js'
import lec from 'gulp-line-ending-corrector'
import plumber from 'gulp-plumber'
import concat from 'gulp-concat'
import gulpif from 'gulp-if'
import sassCompiler from 'sass'
import gulpSass from 'gulp-sass'
import postCSS from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import sassLint from 'gulp-sass-lint'

const { src, dest } = gulp
const sass = gulpSass(sassCompiler)

function coreStyles(basename, source, dist) {

	const isVendor = basename === 'vendor'

	return src(source, { sourcemaps: true })
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(concat(`${basename}.min.css`))
		.pipe(postCSS([autoprefixer()]))
		.pipe(lec({ eolc: 'CRLF' }))
		.pipe(dest(dist, gulpif(!isVendor, { sourcemaps: '.' })))
}


function styles(done) {
	coreStyles('vendor', config.styles.vendor, config.styles.dist.vendor)
	coreStyles('styles', config.styles.app.src, config.styles.dist.dest)
	coreStyles('styleguide', config.styles.app.srcSG, config.styles.dist.dest)
	done()
}

function sassLinter() {
	return src(config.styles.app.watch)
		.pipe(plumber())
		.pipe(sassLint())
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
}

export { styles, sassLinter }