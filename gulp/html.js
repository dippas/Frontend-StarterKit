//--------- Include references
const { src, dest, series, lastRun } = require('gulp'),
	paths = require('./_config'),
	plumber = require('gulp-plumber'), //does not crash if error occurs
	fs = require('graceful-fs'),
	pug = require('gulp-pug'),
	data = require('gulp-data'),
	lec = require('gulp-line-ending-corrector')

//--------- styleguide for presentation files
function styleguide() {
	// list templates
	return src(paths.views.index.src)
		.pipe(plumber())
		.pipe(data(() => JSON.parse(fs.readFileSync(`${paths.data.temp}${paths.data.file}`))))
		.pipe(pug({
			pretty: true,
			basedir: 'src'
		}))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.views.index.dest))
}

//--------- Views : Pug
function views() {
	// sources
	return src(paths.views.pug.src, { since: lastRun(views) })
		.pipe(plumber())
		.pipe(data(() => JSON.parse(fs.readFileSync(`${paths.data.temp}${paths.data.file}`))))
		.pipe(pug({
			pretty: true,
			basedir: 'src'
		}))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.views.pug.dest))
}

function templates() {
	//templates
	return src(paths.views.pug.templates)
		.pipe(plumber())
		.pipe(data(() => JSON.parse(fs.readFileSync(`${paths.data.temp}${paths.data.file}`))))
		.pipe(pug({
			pretty: true,
			basedir: 'src'
		}))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(`${paths.views.pug.dest}/templates`))
}

const html = series(styleguide, views, templates)

exports.data = series(styleguide, views)
exports.templates = series(styleguide, templates)
exports.html = html