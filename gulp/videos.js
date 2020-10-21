//--------- Include references
const { src, dest, lastRun } = require('gulp'),
	paths = require('./_config')

//--------- Videos
function videos(done) {
	src(paths.videos.src, { since: lastRun(videos) })
		.pipe(dest(paths.videos.dest))
	done()
}

exports.videos = videos