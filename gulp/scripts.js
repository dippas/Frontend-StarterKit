//--------- Include references
const { src, dest, series } = require('gulp'),
	paths = require('./_config'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	lec = require('gulp-line-ending-corrector'),
	esLint = require('gulp-eslint'),
	terser = require('gulp-terser')


//--------- Script : javascript
function coreScripts(basename, source, dist) {

	return src(source, { sourcemaps: true })
		.pipe(terser())
		.pipe(concat(`${basename}.min.js`))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(dist, { sourcemaps: '.' }))
}

function scripts(done) {
	coreScripts(
		'vendor',
		paths.scripts.vendor,
		paths.scripts.dist.vendor
	)
	coreScripts(
		'app',
		paths.scripts.app.src,
		paths.scripts.dist.app
	)
	done()
}

function esLinter() {
	return src(paths.scripts.app.src)
		.pipe(plumber())
		.pipe(esLint())
		.pipe(esLint.format('table'))
		.pipe(esLint.failAfterError())
}

exports.scripts = scripts
exports.esLinter = esLinter