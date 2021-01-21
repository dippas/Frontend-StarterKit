//--------- Include references
const { src, dest, lastRun } = require('gulp'),
	paths = require('./_config')

//--------- Videos
function videos() {
	return src(paths.videos.src, { since: lastRun(videos) })
		.pipe(dest(paths.videos.dest))
		.pipe(dest(paths.videos.destProd))
}

exports.videos = videos