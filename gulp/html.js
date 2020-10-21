//--------- Include references
const { src, dest, parallel, lastRun } = require('gulp'),
	paths = require('./_config'),
	plumber = require('gulp-plumber'), 
	fs = require('graceful-fs'),
	pug = require('gulp-pug'),
	data = require('gulp-data'),
	lec = require('gulp-line-ending-corrector')

//--------- styleguide for presentation files
function styleguide(done) {
	// list templates
	src(paths.views.index.src)
		.pipe(plumber())
		.pipe(data(() => JSON.parse(fs.readFileSync(paths.data.temp + paths.data.file))))
		.pipe(pug({
			pretty: true,
			basedir: 'src'
		}))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.views.index.dest))
	done()
}

//--------- Views : Pug
function views(done) {
	// sources
	src(paths.views.pug.src, { since: lastRun(views) })
		.pipe(plumber())
		.pipe(data(() => JSON.parse(fs.readFileSync(paths.data.temp + paths.data.file))))
		.pipe(pug({
			pretty: true,
			basedir: 'src'
		}))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(paths.views.pug.dest))

	//templates
	src(paths.views.pug.templates)
		.pipe(plumber())
		.pipe(data(() => JSON.parse(fs.readFileSync(paths.data.temp + paths.data.file))))
		.pipe(pug({
			pretty: true,
			basedir: 'src'
		}))
		.pipe(lec({
			eolc: 'CRLF'
		}))
		.pipe(dest(`${paths.views.pug.dest}/templates`))

	done()
}

const html = parallel(styleguide, views)

exports.html = html