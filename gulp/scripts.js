//--------- Include references
const { src, dest, lastRun } = require('gulp'),
	paths = require('./_config'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'), 
	lec = require('gulp-line-ending-corrector'),
	esLint = require('gulp-eslint'),
	remember = require('gulp-remember')

//--------- Script : javascript
function scripts(done) {
	//vendor scripts	
	src(paths.scripts.vendor)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(concat('vendor.js'))
		.pipe(rename({
			basename: 'vendor'
		})) // rename file to 'vendor.js'
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(paths.scripts.dist.vendor))

	//app scripts
	src(paths.scripts.app.src, { since: lastRun(scripts) })
		.pipe(plumber())
		.pipe(esLint())
		.pipe(esLint.format('table'))
		.pipe(esLint.failAfterError())
		.pipe(sourcemaps.init())
		.pipe(remember(paths.scripts.app.src))
		.pipe(concat('app.js'))
		.pipe(rename({
			basename: 'app'
		})) // rename file to 'app.js'
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(paths.scripts.dist.app))
	done()
}

exports.scripts = scripts