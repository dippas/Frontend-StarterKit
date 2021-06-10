//--------- Include references
const { src, dest, series } = require('gulp'),
	paths = require('./_config'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	lec = require('gulp-line-ending-corrector'),
	esLint = require('gulp-eslint'),
	terser = require('gulp-terser')


//--------- Script : javascript
function scriptsVendor() {
	//vendor scripts	
	return src(paths.scripts.vendor)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(terser())
		.pipe(concat('vendor.min.js'))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.scripts.dist.vendor))
}

function scriptsApp() {
	//app scripts
	return src(paths.scripts.app.src, { sourcemaps: true })
		.pipe(esLint())
		.pipe(esLint.format('table'))
		.pipe(esLint.failAfterError())
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(terser())
		.pipe(concat('app.min.js'))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.scripts.dist.app, { sourcemaps: '.' }))
}

const scripts = series(scriptsVendor, scriptsApp)

exports.scripts = scripts