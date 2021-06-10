//--------- Include references
const { src, dest } = require('gulp'),
	paths = require('./_config'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	lec = require('gulp-line-ending-corrector'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	postCSS = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	sassLint = require('gulp-sass-lint')

//--------- Compile Sass
function coreStyles(basename, source, dist) {

	return src(source, { sourcemaps: true })
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded', //nested, expanded, compact, compressed
		}).on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(concat(`${basename}.min.css`))
		.pipe(postCSS([autoprefixer()]))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(dist, { sourcemaps: '.' }))
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

function sassLinter() {
	return src(paths.styles.app.watch)
		.pipe(plumber())
		.pipe(sassLint())
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
}

exports.styles = styles
exports.sassLinter = sassLinter