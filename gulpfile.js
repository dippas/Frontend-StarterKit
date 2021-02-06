//--------- Include files
const { series } = require('gulp'),
	cleanFile = require('./gulp/clean'),
	extrasFile = require('./gulp/extras'),
	htmlFile = require('./gulp/html'),
	imagesFile = require('./gulp/images'),
	scriptsFile = require('./gulp/scripts'),
	serverFile = require('./gulp/server'),
	stylesFile = require('./gulp/styles'),
	videosFile = require('./gulp/videos'),
	dev = series(cleanFile.clean, stylesFile.styles, scriptsFile.scripts, htmlFile.html, extrasFile.extras, imagesFile.images, videosFile.videos, stylesFile.sassLinter)

//--------- Create tasks	
exports.build = dev
exports.default = serverFile.server