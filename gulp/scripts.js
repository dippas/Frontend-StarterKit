//--------- Include references
const { src, dest, series } = require('gulp'),
	paths = require('./_config'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'), //does not crash if error occurs
	lec = require('gulp-line-ending-corrector'),
	babel = require('gulp-babel'),
	esLint = require('gulp-eslint')

//--------- Script : javascript
function scriptsVendor() {
	//vendor scripts	
	return src(paths.scripts.vendor)
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
		.pipe(dest(paths.scripts.dist.vendorProd))
		.pipe(dest(paths.scripts.dist.vendor))
}

function scriptsApp() {
	//app scripts
	return src(paths.scripts.app.src)
		.pipe(plumber())
		.pipe(esLint())
		.pipe(esLint.format('table'))
		.pipe(esLint.failAfterError())
		.pipe(sourcemaps.init())
		.pipe(babel({
			'presets': ['@babel/preset-env'],
			'sourceType': 'script'
		}))
		.pipe(concat('app.js'))
		.pipe(rename({
			basename: 'app'
		})) // rename file to 'app.js'
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(paths.scripts.dist.appProd))
		.pipe(dest(paths.scripts.dist.app))
}

const scripts = series(scriptsVendor, scriptsApp)

exports.scripts = scripts