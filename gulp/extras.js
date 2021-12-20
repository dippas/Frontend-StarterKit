import gulp from 'gulp'
import config from './_config.js'
import lec from 'gulp-line-ending-corrector'

const { src, dest, series, lastRun } = gulp

function fonts() {
	return src(config.fonts.src, { since: lastRun(fonts) })
		.pipe(dest(config.fonts.dest))
}

function json() {
	return src(config.json.src, { since: lastRun(json) })
		.pipe(lec({ eolc: 'CRLF' }))
		.pipe(dest(config.json.dest))
}

function pdfs() {
	return src(config.pdfs.src, { since: lastRun(pdfs) })
		.pipe(dest(config.pdfs.dest))
}

function videos() {
	return src(config.videos.src, { since: lastRun(videos) })
		.pipe(dest(config.videos.dest))
}

const extras = series(fonts, json, pdfs, videos)

export default extras