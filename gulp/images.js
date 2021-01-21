//--------- Include references
const { src, dest, lastRun } = require('gulp'),
	paths = require('./_config'),
	min = require('gulp-imagemin')

//--------- Images
function images() {
	return src(paths.images.src, { since: lastRun(images) })
		.pipe(min())
		.pipe(dest(paths.images.dest))
}
exports.images = images