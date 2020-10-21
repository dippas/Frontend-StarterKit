//--------- Include references
const { src, dest, parallel, lastRun } = require('gulp'),
	paths = require('./_config'),
	lec = require('gulp-line-ending-corrector')

//--------- Fonts
function fonts(done) {
	src(paths.fonts.src, { since: lastRun(fonts) })
		.pipe(dest(paths.fonts.dest))
	done()
}

//--------- json
function json(done) {
	src(paths.json.src, { since: lastRun(json) })
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.json.dest))
	done()
}

//---------PDFs
function pdfs(done) {
	src(paths.pdfs.src, { since: lastRun(pdfs) })
		.pipe(dest(paths.pdfs.dest))
	done()
}

const extras = parallel(fonts, json, pdfs)

exports.extras = extras