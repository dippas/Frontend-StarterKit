//--------- Include references
const { src, dest } = require('gulp'),
	paths = require('./_config'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'), 
	lec = require('gulp-line-ending-corrector'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	postCSS = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	sassLint = require('gulp-sass-lint')

//--------- Compile Sass
function coreStyles(basename, source, dist) {

	src(source)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded', //nested, expanded, compact, compressed
		}).on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(concat(`${basename}.css`))
		.pipe(rename({
			basename: basename,
			suffix: '.min'
		}))
		.pipe(postCSS([
			autoprefixer({
				grid: 'autoplace'
			})
		]))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(dist))
}

function styles(done) {
	//vendor
	coreStyles(
		'vendor',
		paths.styles.vendor,
		paths.styles.dist.vendor
	)

	//styles DIST
	coreStyles(
		'styles',
		paths.styles.app.src,
		paths.styles.dist.dest
	)

	//styleGuide
	coreStyles(
		'styleguide',
		paths.styles.app.srcSG,
		paths.styles.dist.dest
	)
	done()
}

function sassLinter(done) {
	src(paths.styles.app.watch)
		.pipe(plumber())
		.pipe(sassLint())
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
	done()
}

exports.styles = styles
exports.sassLinter = sassLinter