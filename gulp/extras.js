//--------- Include references
const { src, dest, parallel, lastRun } = require('gulp'),
	paths = require('./_config'),
	lec = require('gulp-line-ending-corrector')

//--------- Fonts
function fonts() {
	return src(paths.fonts.src, { since: lastRun(fonts) })
		.pipe(dest(paths.fonts.dest))	
}

//--------- json
function json() {
	return src(paths.json.src, { since: lastRun(json) })
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.json.dest))	
}

//---------PDFs
function pdfs() {
	return src(paths.pdfs.src, { since: lastRun(pdfs) })
		.pipe(dest(paths.pdfs.dest))	
}

const extras = parallel(fonts, json, pdfs)

exports.extras = extras