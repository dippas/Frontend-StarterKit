//--------- Include references
const { src, dest, series, lastRun } = require('gulp'),
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

//--------- Videos
function videos() {
	return src(paths.videos.src, { since: lastRun(videos) })
		.pipe(dest(paths.videos.dest))
		.pipe(dest(paths.videos.destProd))
}


const extras = series(fonts, json, pdfs, videos)

exports.extras = extras