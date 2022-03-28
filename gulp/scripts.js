import gulp from 'gulp'
import config from './_config.js'
import lec from 'gulp-line-ending-corrector'
import plumber from 'gulp-plumber'
import concat from 'gulp-concat'
import eslint from 'gulp-eslint'
import terser from 'gulp-terser'

const { src, dest } = gulp

function coreScripts(basename, source, dist) {

	return src(source, { sourcemaps: true })
		.pipe(plumber())
		.pipe(eslint())
		.pipe(eslint.format('table'))
		.pipe(eslint.failAfterError())
		.pipe(concat(`${basename}.min.js`))
		.pipe(terser())
		.pipe(lec({ eolc: 'CRLF' }))
		.pipe(dest(dist, { sourcemaps: '.' }))
}

function scripts(done) {
	coreScripts('vendor', config.scripts.vendor, config.scripts.dist.vendor)
	coreScripts('app', config.scripts.app.src, config.scripts.dist.app)
	done()
}

export default scripts