//--------- Include references
const { src, dest, lastRun } = require('gulp'),
	paths = require('./_config'),
	min = require('gulp-imagemin')

//--------- Images
function images(done) {
	src(paths.images.src, { since: lastRun(images) })
		.pipe(min())
		.pipe(dest(paths.images.dest))
	done()
}
exports.images = images